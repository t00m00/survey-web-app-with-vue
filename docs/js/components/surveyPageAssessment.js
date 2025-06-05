import assts from './assessments.js'
const { ref, computed, onMounted } = Vue

const surveyPageAssessment = {
  props: {
    editMode: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  emits: ['notify-max-total-score', 'notify-restorer', 'notify-assessments-getter', 'update-total-score', 'update-assessments'],
  setup(props, { emit }) {
    const assessments = ref(assts.values)
    const addingMaxScore = ref(5)

    const totalScore = computed(() =>
      assessments.value.map(item => item.value).reduce((acc, v) => acc + v, 0)
    )
    const maxTotalScore = computed(() =>
      assessments.value.map(item => item.maxScore).reduce((acc, v) => acc + v, 0)
    )

    const getAssessments = () => assessments.value
    const restore = (vals) => {
      if (!vals) return
      assessments.value = vals
    }

    const updateTotalScore = () => emit('update-total-score', totalScore.value)
    const updateAssessments = () => emit('update-assessments', assessments.value)
    const add = (score) => assts.add(score)
    const remove = (key) => {
      assts.remove(key)
      assessments.value = assts.values
    }

    onMounted(() => {
      emit('notify-max-total-score', maxTotalScore.value)
      emit('notify-restorer', restore)
      emit('notify-assessments-getter', getAssessments)
    })

    return {
      assessments,
      addingMaxScore,
      totalScore,
      maxTotalScore,
      getAssessments,
      restore,
      updateTotalScore,
      updateAssessments,
      add,
      remove
    }
  },
  template: `
    <div class="pa-0">
      <v-container fluid class="pa-0">
        <div
          v-for="(item, index) in assessments"
          :key="item.key"
          class="assessment-item mb-3"
        >
          <v-row align="center">
            <v-col cols="12" md="4" class="assessment-label">
              <div
                v-if="!editMode"
                class="text-h6 font-weight-medium"
              >
                {{ item.perspective }}
              </div>
              <v-text-field
                v-if="editMode"
                v-model="item.perspective"
                variant="outlined"
                color="primary"
                clearable
                density="compact"
                label="評価項目"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" :md="editMode ? 7 : 8">
              <div class="slider-container">
                <v-slider
                  v-model="item.value"
                  :ticks="[...Array(item.maxScore + 1).keys()]"
                  :tick-labels="[...Array(item.maxScore + 1).keys()].map(String)"
                  color="primary"
                  track-color="grey-lighten-3"
                  :max="item.maxScore"
                  :min="0"
                  show-ticks="always"
                  tick-size="6"
                  step="1"
                  thumb-label="always"
                  class="custom-slider"
                  @update:model-value="() => {
                    updateTotalScore()
                    updateAssessments()
                  }"
                >
                  <template v-slot:thumb-label="{ modelValue }">
                    <span class="text-caption font-weight-bold">{{ modelValue }}</span>
                  </template>
                </v-slider>
                <div class="d-flex justify-between text-caption text-grey mt-2">
                  <span>最低評価 (0)</span>
                  <span>最高評価 ({{ item.maxScore }})</span>
                </div>
              </div>
            </v-col>
            <v-col cols="12" md="1" v-if="editMode" class="text-center">
              <v-btn
                color="error"
                variant="outlined"
                icon="mdi-delete"
                size="small"
                @click="remove(item.key)"
                class="modern-btn"
              >
              </v-btn>
            </v-col>
          </v-row>
        </div>
        
        <!-- 編集モード：新規項目追加 -->
        <div v-if="editMode" class="assessment-item add-item">
          <v-row align="center">
            <v-col cols="12" md="6">
              <v-text-field
                v-model="addingMaxScore"
                type="number"
                label="新規項目の最大スコア"
                variant="outlined"
                color="primary"
                max="10"
                min="1"
                prepend-inner-icon="mdi-numeric"
                density="compact"
              >
              </v-text-field>
            </v-col>
            <v-col cols="12" md="6">
              <v-btn
                color="success"
                variant="flat"
                prepend-icon="mdi-plus"
                @click="add(addingMaxScore)"
                class="modern-btn btn-success"
                block
              >
                評価項目を追加
              </v-btn>
            </v-col>
          </v-row>
        </div>
        
        <!-- 合計スコア表示 -->
        <div class="total-score mt-4">
          <div class="d-flex justify-space-between align-center">
            <div>
              <h3 class="mb-1">総合評価スコア</h3>
              <p class="text-body-2 mb-0 opacity-90">全項目の合計点数</p>
            </div>
            <div class="text-right">
              <h2 class="mb-0">{{ totalScore }}</h2>
              <p class="text-body-2 mb-0 opacity-90">/ {{ maxTotalScore }} 点</p>
            </div>
          </div>
          <v-progress-linear
            :model-value="(totalScore / maxTotalScore) * 100"
            color="white"
            background-color="rgba(255,255,255,0.3)"
            height="8"
            rounded
            class="mt-3"
          ></v-progress-linear>
          <div class="text-center mt-2">
            <span class="text-body-2 opacity-90">
              達成率: {{ maxTotalScore > 0 ? Math.round((totalScore / maxTotalScore) * 100) : 0 }}%

            </span>
          </div>
        </div>
      </v-container>
    </div>
  `,
}

export default surveyPageAssessment
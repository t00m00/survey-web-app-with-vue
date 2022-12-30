import assts from './assessments.js'

const surveyPageAssessment = {
  props: {
    editMode: {
      type: Boolean,
      default: false,
      required: true,
    },
  },
  data() {
    return {
      assessments: assts.values,
      addingMaxScore: 5
    }
  },
  template: `
    <div class="ma-2">
      <v-container fluid>
        <v-row
          dense
          align-content="center"
          v-for="(item, index) in assessments"
          :key="item.key"
        >
          <v-col cols="4" class="d-flex align-center text-subtitle-1">
            <span
              v-if="!editMode"
            >
              {{ item.perspective }}
            </span>
            <v-text-field
              v-if="editMode"
              v-model="item.perspective"
              color="green"
              clearable
              dense
            >
            </v-text-field>
          </v-col>
          <v-col :cols="editMode ? 7 : 8">
            <v-card-text dense>
              <v-slider
                class="text-h6"
                v-model="item.value"
                :tick-labels="Array.from(Array(item.maxScore + 1), (el, index) => index + '')"
                color="green"
                :max="item.maxScore"
                :min="0"
                ticks="always"
                tick-size="5"
                step="1"
                @change="() => {
                  updateTotalScore()
                  updateAssessments()
                }"
              ></v-slider>
            </v-card-text>
          </v-col>
          <v-col cols="1" v-if="editMode" >
            <v-btn
              color="error"
              @click="remove(item.key)"
            >
              削除
            </v-btn>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="2">
            <v-btn
              v-if="editMode"
              color="success"
              class="ml-3 mb-3"
              @click="add(addingMaxScore)"
            >
              追加
            </v-btn>
          </v-col>
          <v-col cols="3">
            <v-text-field
              v-if="editMode"
              v-model="addingMaxScore"
              type="number"
              label="最大スコア"
              max="10"
              min="1"
              color="green"
              clearable
              dense
            >
            </v-text-field>
          </v-col>
        </v-row>
        <v-divider class="my-3" />
        <v-row align-content="center">
          <v-col cols="4" class="d-flex align-center">
            <h3>合計:</h3>
          </v-col>
          <v-col cols="8" class="pl-7">
            <h3>{{ totalScore }} / {{ maxTotalScore }}</h3>
          </v-col>
        </v-row>
      </v-container>
    </div>
  `,
  computed: {
    totalScore: {
      get() {
        return this.assessments
          .map((item) => item.value)
          .reduce((acc, currenctValue) =>  acc + currenctValue, 0)
      }
    },
    maxTotalScore: {
      get() {
        return this.assessments
          .map((item) => item.maxScore)
          .reduce((acc, currenctValue) =>  acc + currenctValue, 0)
      }
    },
  },
  mounted() {
    this.$nextTick(function() {
      this.$emit('notify-max-total-score', this.maxTotalScore)
      this.$emit('notify-restorer', this.restore)
      this.$emit('notify-assessments-getter', this.getAssessments)
    });
  },
  methods: {
    getAssessments() {
      if (!this.assessments)
        return {}

      return this.assessments
    },
    restore(assessments) {
      if (!assessments)
        return

      this.assessments = assessments
    },
    updateTotalScore() {
      this.$emit('update-total-score', this.totalScore)
    },
    updateAssessments() {
      this.$emit('update-assessments', this.assessments)
    },
    add(addingMaxScore) {
      assts.add(addingMaxScore)
    },
    remove(key) {
      assts.remove(key)
      this.assessments = assts.values
    },
  }
}

export default surveyPageAssessment
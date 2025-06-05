import surveyPageAssessment from './surveyPageAssessment.js'
const { ref } = Vue

const localStorageKey = 'key'

const surveyPage = {
  components: {
    'survey-page-assessment': surveyPageAssessment,
  },
  setup() {
    const name = ref('NoName')
    const totalScore = ref(0)
    const maxTotalScore = ref(0)
    const editMode = ref(false)
    const assessmentGetter = ref(() => ({}))
    const assessmentRestorer = ref(() => {})

    const save = (assessments) => {
      const surveyData = { name: name.value, assessments }
      localStorage.setItem(localStorageKey, JSON.stringify(surveyData))
    }

    const restore = () => {
      const tmp = localStorage.getItem(localStorageKey)
      if (!tmp) return
      const surveyData = JSON.parse(tmp)
      name.value = surveyData.name
      assessmentRestorer.value(surveyData.assessments)
    }

    const remove = () => {
      localStorage.removeItem(localStorageKey)
    }

    const edit = () => {
      editMode.value = !editMode.value
    }

    const exportAssessments = async (fileName) => {
      try {
        const fileSystemHandle = await window.showSaveFilePicker({
          suggestedName: `${fileName}.json`
        })
        const src = { name: name.value, assessments: assessmentGetter.value() }
        const blob = new Blob([JSON.stringify(src)], { type: 'application/json;charset=utf-8' })
        const stream = await fileSystemHandle.createWritable()
        await stream.write(blob)
        await stream.close()
        console.log(`success: エクスポート. ${fileName}`)
      } catch (ex) {
        console.log('DOMExceptionの場合はエクスポートをキャンセル')
        console.log(ex)
      }
    }

    const onNotifyAssessmentsGetter = (getter) => {
      assessmentGetter.value = getter
    }
    const onNotifyRestorer = (restorer) => {
      assessmentRestorer.value = restorer
    }
    const onNotifyMaxTotalScore = (score) => {
      maxTotalScore.value = score
    }
    const onUpdateTotalScore = (score) => {
      totalScore.value = score
    }
    const onUpdateAssessments = (assessments) => {
      save(assessments)
    }

    return {
      name,
      totalScore,
      maxTotalScore,
      editMode,
      edit,
      restore,
      remove,
      exportAssessments,
      onNotifyAssessmentsGetter,
      onNotifyRestorer,
      onNotifyMaxTotalScore,
      onUpdateTotalScore,
      onUpdateAssessments
    }
  },
  template: `
    <div class="survey-container">
      <h1 class="survey-title">アンケート評価システム</h1>
      
      <v-container fluid class="pa-0">
        <v-row class="mb-4">
          <v-col>
            <v-text-field
              v-model="name"
              placeholder="評価対象者の名前を入力してください"
              label="評価対象者名"
              variant="outlined"
              color="primary"
              clearable
              prepend-inner-icon="mdi-account"
              class="name-input"
            >
            </v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <survey-page-assessment
        :editMode="editMode"
        @notify-assessments-getter="onNotifyAssessmentsGetter"
        @notify-restorer="onNotifyRestorer"
        @notify-max-total-score="onNotifyMaxTotalScore"
        @update-total-score="onUpdateTotalScore"
        @update-assessments="onUpdateAssessments"
      >
      </survey-page-assessment>
      
      <v-container class="pa-0 mt-6">
        <v-row class="mb-4">
          <v-col cols="12" md="6">
            <v-btn
              @click="exportAssessments(name)"
              class="modern-btn btn-export"
              size="large"
              prepend-icon="mdi-download"
              block
            >
              評価結果をエクスポート
            </v-btn>
          </v-col>
          <v-col cols="12" md="6">
            <div class="d-flex gap-2 justify-end">
              <v-btn
                @click="edit"
                class="modern-btn"
                :class="editMode ? 'btn-success' : 'btn-primary'"
                variant="flat"
                :prepend-icon="editMode ? 'mdi-pencil-off' : 'mdi-pencil'"
              >
                {{ editMode ? "編集完了" : "項目編集" }}
              </v-btn>
              <v-btn
                @click="restore"
                class="modern-btn btn-primary"
                variant="outlined"
                prepend-icon="mdi-upload"
              >
                データ読込
              </v-btn>
              <v-menu location="top">
                <template v-slot:activator="{ props }">
                  <v-btn 
                    v-bind="props" 
                    class="modern-btn" 
                    color="error"
                    variant="outlined"
                    icon="mdi-delete"
                  >
                  </v-btn>
                </template>
                <v-btn
                  variant="flat"
                  color="error"
                  @click="remove"
                  prepend-icon="mdi-delete-forever"
                  class="modern-btn"
                >
                  保存データを削除
                </v-btn>
              </v-menu>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
  `,
}

export default surveyPage
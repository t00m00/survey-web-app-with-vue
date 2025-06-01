import surveyPageAssessment from './surveyPageAssessment.js'

const localStorageKey = 'key'

const surveyPage = {
  components: {
    'survey-page-assessment': surveyPageAssessment,
  },
  emits: ['notify-assessments-getter', 'notify-restorer', 'notify-max-total-score', 'update-total-score', 'update-assessments'],
  data() {
    return {
      name: `NoName`,
      totalScore: 0,
      maxTotalScore: 0,
      editMode: false,
      assessmentGetter: () => { return {} },
      assessmentRestorer: () => {},
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
        @notify-assessments-getter="assessmentGetter = $event"
        @notify-restorer="assessmentRestorer = $event"
        @notify-max-total-score="maxTotalScore = $event"
        @update-total-score="totalScore = $event"
        @update-assessments="save($event)"
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
  methods: {
    localStorageList() {
      // 🌟保存されているデータ一覧の表示から再開する 22/12/24🌟
      const keyLength = localStorage.length
      return localStorage.length
    },
    edit() {
      this.editMode = !this.editMode
    },
    save(assessments) {
      const surveyPage = {
        name: this.name,
        assessments: assessments,
      }

      localStorage.setItem(localStorageKey, JSON.stringify(surveyPage));
    },
    restore() {
      const tmpSurveyPage = localStorage.getItem(localStorageKey);
      if (!tmpSurveyPage)
        return

      const surveyPage = JSON.parse(tmpSurveyPage);
      this.name = surveyPage.name
      this.assessmentRestorer(surveyPage.assessments)
    },
    remove() {
      localStorage.removeItem(localStorageKey);

      // 初期化
      // localStorage.clear()
    },
    async exportAssessments(fileName) {
      try {
        // TODO: 別クラスへ独立させるリファクタリングをする
        // Chromium系ブラウザのみサポート
        const fileSystemHandle = await window.showSaveFilePicker(
          {
            suggestedName: `${fileName}.json`
          })

        const src = Object.assign({},
          {
            name: this.name,
            assessments: this.assessmentGetter()
          },
        )

        const exportTarget = JSON.stringify(src) 
        const blob = new Blob([exportTarget], { type: 'application/json;charset=utf-8' })

        const stream = await fileSystemHandle.createWritable()
        await stream.write(blob)
        await stream.close

        console.log(`success: エクスポート. ${fileName}`)
      }
      catch(ex) {
        console.log('DOMExceptionの場合はエクスポートをキャンセル')
        console.log(ex)
      }
    },
  }
}

export default surveyPage
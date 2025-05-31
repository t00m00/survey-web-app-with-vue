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
    <div class="my-5">
      <!-- localStorageList: {{ localStorageList() }} -->

      <h4>feedback</h4>
      <v-container fluid class='ma-2'>
        <v-row>
          <v-col class="d-flex align-center">
            <v-text-field
              v-model="name"
              :placeholder="'名前を入力してください'"
              label="名前"
              color="green"
              clearable
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
      <!-- <p>親コンポーネントで合計値表示: {{ totalScore }} / {{ maxTotalScore }}</p> -->
      <v-container>
        <v-row>
          <v-col>
            <v-btn
              @click="exportAssessments(name)"
            >
              エクスポート
            </v-btn>
          </v-col>
          <v-col class="d-flex justify-end">
            <v-btn
              @click="edit"
            >
              {{ editMode ? "編集中" : "編集" }}
            </v-btn>
            <v-btn
              @click="restore"
            >
              load
            </v-btn>
            <v-menu
              location="top"
            >
              <template v-slot:activator="{ props }">
                <v-btn v-bind="props">削除</v-btn>
              </template>
              <v-btn
                variant="text"
                color="error"
                @click="remove"
              >
                保存データを削除する
              </v-btn>
            </v-menu>
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
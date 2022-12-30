import surveyPageAssessment from './surveyPageAssessment.js'

const localStorageKey = 'key'

const surveyPage = {
  components: {
    'survey-page-assessment': surveyPageAssessment,
  },
  data() {
    return {
      name: `no name`,
      totalScore: 0,
      maxTotalScore: 0,
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
              label="名前"
              color="green"
              clearable
            ></v-text-field>
          </v-col>
        </v-row>
      </v-container>
      <survey-page-assessment
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
          <v-col class="d-flex justify-end"">
            <v-btn
              @click="restore"
            >
              load
            </v-btn>
            <v-menu
              top
              offset-y
            >
              <template v-slot:activator="{ on }">
                <v-btn v-on="on">削除</v-btn>
              </template>
              <v-btn
                text
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
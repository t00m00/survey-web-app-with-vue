// TODO: configを読み込むクラスを作成する
import config from './../../survey.config.js'

const surveyPageAssessment = {
  data() {
    return {
      assessments: config.assessments
    }
  },
  template: `
    <div class="ma-2">
      <v-container fluid>
        <v-row
          dense
          align-content="center"
          v-for="(item, index) in assessments"
          :key="item.perspective"
        >
          <v-col cols="4" class="d-flex align-center text-subtitle-1">
            {{ item.perspective }}
          </v-col>
          <v-col cols="8">
            <v-card-text dense>
              <v-slider
                class="text-h6"
                v-model="item.value"          
                :tick-labels="Array.from(Array(item.maxScore + 1), (el, index) => index + '')"
                color="green"
                :max="item.maxScore"
                :min="0"e
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
  } 
}

export default surveyPageAssessment
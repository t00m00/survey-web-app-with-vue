class Assessment {
  constructor(appConfig) {
    this.appConfig = appConfig;
    const assessments = JSON.parse(JSON.stringify(appConfig.assessments)).map(
      (ele) => {
        return Object.assign({ key: `${Math.random()}` }, ele);
      }
    );

    this.assessments = assessments;
  }

  get values() {
    return this.assessments;
  }

  add(addingMaxScore) {
    const tmp = Number(addingMaxScore);
    const maxScore = tmp < 1 ? 1 : 10 < tmp ? 10 : tmp;

    this.assessments.push({
      key: `${Math.random()}`,
      perspective: `新しい設問`,
      maxScore: maxScore,
      value: 0,
    });
  }

  remove(key) {
    console.log("key");
    console.log(key);
    this.assessments = this.assessments.filter((ele) => ele.key !== key);
  }
}

const assessments = new Assessment(appConfig);

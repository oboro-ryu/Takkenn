const questionText = document.getElementById("question-text");
const choices = document.querySelectorAll(".choice");
const result = document.getElementById("result");
let currentQuestionIndex = 0;
let score = 0;

const questions = [
    //専任の宅建士の設置義務
    // {
    //     mainQuestion: "正しいものはどれか？",
    //     question: "問題文がここに表示されます",
    //     choices: ["", "", "", ""],
    //     correctChoice: 1,
    //     explanation: "解説が表示されます。",
    // },
    {
        mainQuestion: "正しいものはどれか？",
        question: "宅建建物取引業者A社はその主たる事務所に従事する唯一の専任の建物取引士が退職した時は[...]日以内に、新たな専任の宅地建物取引士を設置しなければならない。",
        choices: ["1週間", "2週間", "1ヶ月", "３ヶ月"],
        correctChoice: 2,
        explanation: "専任の宅建士が退職したら、2週間以内に新たな専任の宅建士を設置しなければならない。",
    },
    {
        mainQuestion: "正しいものはどれか？",
        question: "宅地建物取引業者A社は、10戸の一団の建物の分譲の代理を案内所を設置して行う場合、当該案内所に従事するものが6名である時は、当該案内所は少なくとも[...]名の専任の宅建士が必要となる。",
        choices: ["1", "2", "3", "4"],
        correctChoice: 1,
        explanation: "契約し、又は申込みを受ける案内所には1名以上の専任の宅建士を設置すればよい。なお、事務所には5人に1人以上の割合で専任の宅建士の設置が必要となる。",
    },
    {
        mainQuestion: "正しいものはどれか？",
        question: "宅地建物取引業者A社は、甲県内に主たる事務所があり、新たに支店を乙県内に設置して行う場合、当該支店に従事するものが6名である時は、当該支店は少なくとも[...]名の専任の宅建士が必要となる。",
        choices: ["1", "2", "3", "4"],
        correctChoice: 1,
        explanation: "事務所には5人に1人以上の割合で専任の宅建士の設置が必要となる。",
    },
    //宅建業者//
    {
        mainQuestion: "宅地建物取引業の免許(以下この問いにおいて「免許」という。)に関する次の記述のうち、宅地建物取引業法の規定によれば、正しいものはどれか？",
        question: "法人である宅地建物取引業者A（甲県知事免許）は、役員の[...]について変更があった場合、その日から30日以内に、その旨を甲県知事に届け出なければならない。",
        choices: ["本籍", "住所", "氏名", "番号"],
        correctChoice: 3,
        explanation: "業者名簿（変更の届出）や免許証（書き換えの交付の申請）が必要な項目は人や氏名のみである。今回は甲県知事に届け出なので、変更の届けについての問題である。住所や本籍が変更しても変更の届出は不要である。",
    },
    {
        mainQuestion: "宅地建物取引業の免許(以下この問いにおいて「免許」という。)に関する次の記述のうち、宅地建物取引業法の規定によれば、誤っているものはどれか？",
        question: "法人である宅地建物取引業者A（甲県知事免許）は、[...]について変更があった場合、書き換え交付の申請と併せて変更の届出も30日以内に必要である。",
        choices: ["商号または名称", "代表者氏名", "主たる事務所", "本籍"],
        correctChoice: 4,
        explanation: "免許証の記載事項（書き換え交付の申請）である①商号または名称、②代表者氏名、③主たる事務所について変更があれば変更の届出と併せて、免許証の書き換えの交付の申請が必要となる。",
    },
    {
        mainQuestion: "宅地建物取引業の免許(以下この問いにおいて「免許」という。)に関する次の記述のうち、宅地建物取引業法の規定によれば、正しいものはどれか？？",
        question: "法人である宅地建物取引業者A（甲県知事免許）は、代表者氏名について変更があった場合、その日から30日以内に、その旨を国土交通大臣に対して行う場合、[...]国土交通大臣に対して行う。",
        choices: ["知事を経由して", "直接", "間接", "選択肢なし"],
        correctChoice: 2,
        explanation: "国土交通大臣に対して行う場合、業者名簿の変更の届出は知事を経由して行う。一方で、免許証の書き換え交付の申請は直接国土交通大臣に対して行う。",
    },
    {
        mainQuestion: "宅地建物取引業の免許(以下この問いにおいて「免許」という。)に関する次の記述のうち、宅地建物取引業法の規定によれば、正しいものはどれか？",
        question: "法人である宅地建物取引業者A（甲県知事免許）は、免許の有効期間は5年であり、宅建業を継続するには、免許の有効期間の満了の日の[...]までの間に免許の更新をしなければならない。",
        choices: ["2週間前", "6ヶ月前", "90~30日前", "1年前"],
        correctChoice: 3,
        explanation: "免許の更新は90日~30日前までである。",
    },
    {
        mainQuestion: "宅地建物取引士の登録に関する次の記述のうち、宅地建物取引業法の規定によれば、誤っているものはどれか？",
        question: "宅地建物取引士が刑法204条の傷害罪により罰金の刑に処せられ、登録が削除された場合は、[...]の日から５年間は登録を受けることができない。",
        choices: ["その刑の執行がおわった", "当該登録が削除された", "受けることがなくなった", "選択肢なし"],
        correctChoice: 2,
        explanation: "宅建士が暴行罪。傷害罪などにより「罰金」の刑に処せられた場合、その刑の執行が終わり、又は受けることがなくなった日から「５年間」は登録を受けることはできない。",
    },
    {
        mainQuestion: "宅地建物取引士の登録(以下この問いにおいて「登録」という)及び宅地建物取引証に関する次の選択肢のうち、宅地建物取引業法の規定によれば、正しいものはどれか？",
        question: "宅地建物取引業者(甲県知事免許)に勤務する宅地建物取引士(甲県知事登録)が乙県に[...]をした場合は、乙県知事に登録の移転をすることができる。",
        choices: ["住所", "氏名", "本籍", "勤務地"],
        correctChoice: 4,
        explanation: "勤務地が変更となった場合に限り、登録の移転をすることができる。なお、「できる」であり、「しなければならない」ではない。なお、勤務地であり、勤務先は住所のことであるため注意が必要である。",
    },
    {
        mainQuestion: "宅地建物取引士の登録(以下この問いにおいて「登録」という)及び宅地建物取引証に関する次の選択肢のうち、宅地建物取引業法の規定によれば、正しいものはどれか？",
        question: "業務停止の処分に違反したとして宅地建物取引業の免許の取り消しを受けた[...]は、当該免許取り消しの日から5年を経過しなければ、登録を受けることができない。",
        choices: ["政令で定める使用人であった者", "60日以内の役員", "法人において役員でない従業者であった者", "勤務地"],
        correctChoice: 2,
        explanation: "「業務停止処分」に違反したとして免許の「取り消し」を受けると、免許取消し処分の聴聞の前の「60日以内」の「役員」は、免許取り消しの日から「5年間」は免許を受けることができない。",
    },
    {
        mainQuestion: "宅地建物取引士の登録(以下この問いにおいて「登録」という)及び宅地建物取引証に関する次の選択肢のうち、宅地建物取引業法の規定によれば、誤っているものはどれか？",
        question: "宅地建物取引業者A(甲県知事免許)に勤務する宅地建物取引士(甲県知事登録)が、宅地建物取引業者B(乙県知事免許)に[...]を変更した場合は、登録を受けた甲県知事に対して、遅滞なく勤務先の変更の登録の申請をしなければならない。",
        choices: ["勤務先", "勤務地", "住所", "本籍"],
        correctChoice: 2,
        explanation: "勤務地が変更となった場合に限り、登録の移転をすることができる。なお、勤務先は登録簿の住所に該当する。そのほかにも、氏名・性別、本籍、免許証番号の変更があれば遅滞なく変更の登録を行う。",
    },        
    {
        mainQuestion: "宅地建物取引士の登録(以下この問いにおいて「登録」という)及び宅地建物取引証に関する次の選択肢のうち、宅地建物取引業法の規定によれば、正しいものはどれか？",
        question: "宅地建物取引士は、従事先として登録している宅地建物取引業者の[...]に変更があったときは、登録を受けている都道府県知事変更の登録の申請をしなければならない。。",
        choices: ["事務所の所在地", "勤務地", "住所", "選択肢なし"],
        correctChoice: 3,
        explanation: "勤務地が変更となった場合に限り、登録の移転をすることができる。なお、勤務先は登録簿の住所に該当する。そのほかにも、氏名・性別、本籍、免許証番号の変更があれば遅滞なく変更の登録を行う。",
    },    

];


const mainQuestionText = document.getElementById("main-question-text");

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    mainQuestionText.textContent = question.mainQuestion;
    questionText.textContent = question.question;

    choices.forEach((choice, index) => {
        choice.textContent = question.choices[index];
    });
}


const explanationElement = document.getElementById("explanation");

const answerStatus = document.getElementById("answer-status");
const explanationText = document.getElementById("explanation-text");
const nextButton = document.getElementById("next-button");
const answerExplanation = document.getElementById("answer-explanation");


function checkAnswer(choiceIndex) {
    const question = questions[currentQuestionIndex];

    if (question.correctChoice === choiceIndex) {
        answerStatus.textContent = "正解！";
        score++; 
    } else {
        answerStatus.textContent = "不正解...";
    }

    explanationText.textContent = question.explanation;
    explanationElement.style.display = "block";
    nextButton.style.display = "block";
    choices.forEach((choice) => {
        choice.style.display = "none";
    });
}

function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
        explanationElement.style.display = "none";
        nextButton.style.display = "none";
        answerStatus.textContent = "";
        explanationText.textContent = "";
        choices.forEach((choice) => {
            choice.style.display = "block";
        });
    } else {
        window.location.href = `result.html?score=${score}`;
    }
}

explanationElement.textContent = question.explanation; // 解説文を表示

currentQuestionIndex++;

if (currentQuestionIndex < questions.length) {
    displayQuestion();
} else {
    result.textContent = `クイズ終了！あなたのスコアは ${score}/${questions.length} です。`;
    choices.forEach((choice) => {
        choice.style.display = "none";
    });
}

displayQuestion();


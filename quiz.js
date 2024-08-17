const quizData = [
    {
      "id": 1,
      "question": "カウンセリングにおける「リフレクション」の目的は何ですか？ 正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "クライエントの感情を反映させるため", "answer": true },
        { "text": "クライエントの行動を指摘するため", "answer": false },
        { "text": "カウンセラーの意見を伝えるため", "answer": false },
        { "text": "問題の解決策を提供するため", "answer": false }
      ]
    },
    {
      "id": 2,
      "question": "「アクティブリスニング」の主要な要素として正しいものを一つ以上選択すること。",
      "multiselect": true,
      "options": [
        { "text": "共感的理解", "answer": true },
        { "text": "フィードバックの提供", "answer": true },
        { "text": "問題解決の提案", "answer": false },
        { "text": "クライエントの意見を否定すること", "answer": false }
      ]
    },
    {
      "id": 3,
      "question": "「認知行動療法」における「認知の歪み」とは何ですか？ 正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "現実を歪めて認識する思考パターン", "answer": true },
        { "text": "行動の習慣", "answer": false },
        { "text": "感情の表現方法", "answer": false },
        { "text": "社会的なスキル", "answer": false }
      ]
    },
    {
      "id": 4,
      "question": "「パーソンセンタードセラピー」の主要な概念として正しいものを一つ以上選択すること。",
      "multiselect": true,
      "options": [
        { "text": "自己一致", "answer": true },
        { "text": "無条件の肯定的配慮", "answer": true },
        { "text": "問題の解決策をカウンセラーが提供する", "answer": false },
        { "text": "クライエントの行動を監視する", "answer": false }
      ]
    },
    {
      "id": 5,
      "question": "「精神分析療法」における「防衛機制」の例として正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "抑圧", "answer": true },
        { "text": "回避", "answer": false },
        { "text": "承認", "answer": false },
        { "text": "感謝", "answer": false }
      ]
    },
    {
      "id": 6,
      "question": "「認知行動療法」の「行動活性化」の目的として正しいものを一つ以上選択すること。",
      "multiselect": true,
      "options": [
        { "text": "クライエントの活動レベルを高める", "answer": true },
        { "text": "感情の抑制", "answer": false },
        { "text": "社会的なスキルの向上", "answer": false },
        { "text": "否定的思考の変化", "answer": true }
      ]
    },
    {
      "id": 7,
      "question": "「ソリューションフォーカストセラピー」における「例外質問」とは何ですか？ 正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "問題が発生しなかった時の状況を尋ねる質問", "answer": true },
        { "text": "問題の詳細な分析を行う質問", "answer": false },
        { "text": "クライエントの過去の失敗について質問する", "answer": false },
        { "text": "現在の問題について深く掘り下げる質問", "answer": false }
      ]
    },
    {
      "id": 8,
      "question": "「ゲシュタルト療法」の「今ここ」に焦点を当てる理由として正しいものを一つ以上選択すること。",
      "multiselect": true,
      "options": [
        { "text": "現在の体験に対する意識を高めるため", "answer": true },
        { "text": "過去の問題を解決するため", "answer": false },
        { "text": "未来の目標を設定するため", "answer": false },
        { "text": "自己認識を深めるため", "answer": true }
      ]
    },
    {
      "id": 9,
      "question": "「解決志向アプローチ」の基本的な考え方として正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "問題ではなく解決策に焦点を当てる", "answer": true },
        { "text": "クライエントの過去を深く掘り下げる", "answer": false },
        { "text": "カウンセラーが解決策を提示する", "answer": false },
        { "text": "長期的な治療計画を立てる", "answer": false }
      ]
    },
    {
      "id": 10,
      "question": "「人間性心理学」における「自己実現」とは何ですか？ 正しいものを一つ以上選択すること。",
      "multiselect": true,
      "options": [
        { "text": "個人が自分の可能性を最大限に発揮すること", "answer": true },
        { "text": "他者の期待に応えること", "answer": false },
        { "text": "社会的な地位を向上させること", "answer": false },
        { "text": "生活の質を高めること", "answer": true }
      ]
    },
    {
      "id": 11,
      "question": "「心理社会的発達理論」における「成人期」に関する課題として正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "親密性対孤立性", "answer": true },
        { "text": "信頼性対不信感", "answer": false },
        { "text": "自主性対恥と疑念", "answer": false },
        { "text": "自己主張対服従", "answer": false }
      ]
    },
    {
      "id": 12,
      "question": "「エンカウンターグループ」の目的として正しいものを一つ以上選択すること。",
      "multiselect": true,
      "options": [
        { "text": "自己理解を深める", "answer": true },
        { "text": "社会的なスキルを向上させる", "answer": true },
        { "text": "問題解決のための具体的なスキルを教える", "answer": false },
        { "text": "リーダーシップを養う", "answer": false }
      ]
    },
    {
      "id": 13,
      "question": "「ビヘイビオライズドセラピー」における「強化」の概念とは何ですか？ 正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "望ましい行動を増加させるための報酬", "answer": true },
        { "text": "行動を抑制するための罰", "answer": false },
        { "text": "感情の表現を促すための手法", "answer": false },
        { "text": "過去の経験を分析する方法", "answer": false }
      ]
    },
    {
      "id": 14,
      "question": "「応答的援助」の基本的な特徴として正しいものを一つ以上選択すること。",
      "multiselect": true,
      "options": [
        { "text": "クライエントのニーズに基づいて支援を行う", "answer": true },
        { "text": "カウンセラーの意見を強調する", "answer": false },
        { "text": "クライエントの感情を無視する", "answer": false },
        { "text": "自己表現を促進する", "answer": true }
      ]
    },
    {
      "id": 15,
      "question": "「統合的アプローチ」における「エコロジカルモデル」の主な特徴として正しいものを一つ選択すること",
      "multiselect": false,
      "options": [
        { "text": "個人と環境の相互作用に焦点を当てる", "answer": true },
        { "text": "過去のトラウマに集中する", "answer": false },
        { "text": "特定の理論に限定する", "answer": false },
        { "text": "長期的な治療計画を重視する", "answer": false }
      ]
    }
  ];
  
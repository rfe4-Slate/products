var models = require('../models');

module.exports = {
  get: (req, res) => {
    var productID = req.params.product_id;
    console.log(productID)
      models.productStyles.getProductStyles((data)=>{res.send(data)}, productID)
  }

}

/*
SELECT questions.id AS questions_id, questions.body, questions.date_written, questions.asker_name, questions.reported, questions.helpful,
    COALESCE(JSON_OBJECT_AGG(answers.id,
      JSON_BUILD_OBJECT('id', answers.id, 'body', answers.body, 'date', answers.date_written, 'answerer_name', answers.answerer_name, 'helpfulness', answers.helpful, 'photos', ARRAY (
        SELECT answers_photos.url
        FROM answers_photos
        WHERE answers_photos.answer_id = answers.id
        ))) FILTER (WHERE answers.id IS NOT NULL), '{}'::JSON) AS answers
      FROM questions
      LEFT JOIN answers
      ON questions.id = answers.question_id
      WHERE questions.product_id = ${productID} AND questions.reported = 0
      GROUP BY questions.id
      LIMIT ${count}
      OFFSET 1

      */
import * as express from "express";
const router = express.Router();

router.get('/', (req, res) => {
    res.json({status: 1, msg: 'DALE MEU POVO'});
});

router.post('/', (req, res) => {
    const {nome, idade, cpf} = req.body;
    res.json({status: 1, msg: `Oi ${nome}, você acabou de me dizer que tem ${idade} anos!`});
});

export = router;
var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/listar", function (req, res) {
    usuarioController.listar(req, res);
});

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.entrar(req, res);
});

router.get("/idade_dezoito", function (req, res) {
    usuarioController.idade_dezoito(req, res);
});

router.get("/idade_onze", function (req, res) {
    usuarioController.idade_onze(req, res);
});

router.get("/idade_dezessete", function (req, res) {
    usuarioController.idade_dezessete(req, res);
});

router.get("/idade_dez", function (req, res) {
    usuarioController.idade_dez(req, res);
});

router.get("/idade_dezenove", function (req, res) {
    usuarioController.idade_dezenove(req, res);
});

router.get("/idade_trinta", function (req, res) {
    usuarioController.idade_trinta(req, res);
});

module.exports = router;
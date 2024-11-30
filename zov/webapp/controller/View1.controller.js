sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
],
function (Controller,MessageToast) {
    "use strict";

    return Controller.extend("vicenterj.grandesprojetos.zov.controller.View1", {
        onInit: function () {
/*
            //alert("onInit");
            var oView = this.getView();
            var oModel = new sap.ui.model.json.JSONModel();
            oModel.setData({"usuario": {"nome": "Vicente"}});
            oView.setModel(oModel);
*/
                // model com o nome "dados"
                var oView  = this.getView();
                var oModel = new sap.ui.model.json.JSONModel();
                oModel.setData({"usuario": {"nome": "José"}});
                oView.setModel(oModel,"dados");            

        },

        onBeforeRendering: function(){
            //alert("onBeforeRendering");
        },

        onAfterRendering: function(){
            //alert("onAfterRendering");
        },

        onExit: function(){
            //alert("onExit");
        },

        onCalcular: function(){
            var oView = this.getView();
            var iB1 = parseInt(oView.byId("b1").getValue());
            var iB2 = parseInt(oView.byId("b2").getValue());
            var iB3 = parseInt(oView.byId("b3").getValue());
            var iB4 = parseInt(oView.byId("b4").getValue());
            var fResultado = 0;
            
            fResultado = ( iB1 + iB2 + iB3 + iB4) / 4;

            oView.byId("resultado").setValue(fResultado);

            MessageToast.show("Resultado = "+fResultado);

            // MessageToast
            // sap.m.MessageToast
            
            //oView.destroy();
        },

        _onPress: function () {
            alert("Hello, World!");
        },

        ExibirMensagem01: function(){

            var sTitle = this.getView().getModel("i18n").getResourceBundle().getText("customerName");
            alert(sTitle);
        },

        ExibirMensagem02: function(){

            var oI18n  = this.getView().getModel("i18n").getResourceBundle();
            var oModel = this.getView().getModel();
            var oData  = oModel.getData();

            // MessageToast
            // sap.m.MessageToast
            
            //oView.destroy();
            var sText = oI18n.getText("welcomeMsg",[oData.usuario.nome]);
            alert(sText);
        },


        onTestModels: function(){
            // model i18n
            var oI18n = this.getView().getModel("i18n").getResourceBundle();
            var sText = oI18n.getText("title");
            console.log("Texto com a chave 'title'");
            console.log(sText);
            console.log("------------------------------------------");
            // model de usuários
            var oModel = this.getOwnerComponent().getModel("usuarios");
            var oData = oModel.getData();
            console.log("Model dos usuários")
            console.log(oData);
            console.log("------------------------------------------");

            var sText = oI18n.getText("welcomeMsg",[oData.usuario.nome]);
            alert(sText);
            // model do serviço
            var oModel = this.getOwnerComponent().getModel();
            oModel.read("/OVCabSet",{
                success: function(oData, oResponse){
                    console.log("Dados retornados do serviço")
                    console.log(oData);
                    console.log(oResponse);
                },
                error: function(oError){
                    console.log(oError);
                }
            });
        }        


    });
});

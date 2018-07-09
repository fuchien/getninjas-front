const expect = require('chai').expect;
import renderRequestFields from '../../../js/form/request-fields/request-fields';

describe('test renderRequestFields function', () => {
    it('should renderRequestFields', () => {
        let requestFields = [
            {
              "name": "Qual será o serviço?",
              "label": "Qual será o serviço?",
              "placeholder": "Qual será o serviço?",
              "mask": "tipo de serviço",
              "type": "enumerable",
              "required": true,
              "values": {
                "Coloração": "Coloração",
                "Corte": "Corte",
                "Escova ": "Escova ",
                "Escova progressiva/definitiva": "Escova progressiva/definitiva",
                "Luzes": "Luzes",
                "Manicure": "Manicure",
                "Pedicure": "Pedicure",
                "Penteado": "Penteado"
              }
            },
            {
              "name": "Para quem será o serviço?",
              "label": "Para quem será o serviço?",
              "placeholder": "Para quem será o serviço?",
              "mask": "indique para quem será o serviço",
              "type": "enumerable",
              "required": false,
              "values": {
                "Criança": "Criança",
                "Homem": "Homem",
                "Mulher": "Mulher"
              }
            },
            {
              "name": "O serviço será para quantas pessoas?",
              "label": "O serviço será para quantas pessoas?",
              "placeholder": "O serviço será para quantas pessoas?",
              "mask": "indique o número de pessoas",
              "type": "enumerable",
              "required": false,
              "values": {
                "1": "1",
                "2": "2",
                "Mais de 3": "Mais de 3"
              }
            },
            {
              "name": "Para quando você precisa deste serviço?",
              "label": "Para quando você precisa deste serviço?",
              "placeholder": "Para quando você precisa deste serviço?",
              "mask": "Indique o prazo do serviço",
              "type": "enumerable",
              "required": true,
              "values": {
                "Hoje ou nos próximos dias": "Hoje ou nos próximos dias",
                "Nos próximos 30 dias": "Nos próximos 30 dias",
                "Nos próximos 3 meses": "Nos próximos 3 meses",
                "Ainda não tenho previsão": "Ainda não tenho previsão"
              }
            },
            {
              "name": "Informações Adicionais",
              "label": "Informações Adicionais",
              "type": "big_text",
              "placeholder": "Descreva o que você precisa",
              "required": false
            }
          ]
        expect(renderRequestFields(requestFields)).not.to.be.undefined;
    });
});
const Kbot = require("./Kbot");

describe("Saludor", () => {
    it("deberia Saludar a Andrés en idioma default", () => {
        let kbot = new Kbot();
        let resultado = kbot.saludar("Andrés") 
        expect(["Buenos días Andrés","Buenas tardes Andrés","Buenas noches Andrés"]).toContain(resultado);
    });

    it("Saludar a Andrés en español por la tarde", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Andrés", 14)
        expect(resultado).toEqual("Buenas tardes Andrés");
    });

    it("Saludar a Sebastian en español por la mañana", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Sebastian", 8)
        expect(resultado).toEqual("Buenos días Sebastian");
    });
    it("Saludar a Sebastian en español por la noche", () => {
        let kbot = new Kbot("ES");
        let resultado = kbot.saludar("Sebastian", 22)
        expect(resultado).toEqual("Buenas noches Sebastian");
    });
    it("Saludar a Joselito en ingles por la tarde", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Joselito", 15)
        expect(resultado).toEqual("Good afternoon Joselito");
    });

    it("Saludar a Joselito en ingles por la mañana", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Joselito", 0)
        expect(resultado).toEqual("Good morning Joselito");
    });
    it("Saludar a Joselito en ingles por la noche", () => {
        let kbot = new Kbot("EN");
        let resultado = kbot.saludar("Joselito", 20)
        expect(resultado).toEqual("Good evening Joselito");
    });

  });
  
const express = require("express");
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/api/ricette", (req, res) => {
  res.send([
    {
      img: "https://www.giallozafferano.it/images/232-23235/Uova-in-camicia_450x300.jpg",
      ricetta: "Uova in camicia",
      desc: "Una nuvola bianca nasconde un ripieno cremoso e irresistibile... parliamo delle uova in camicia, una ricetta per cuocere le uova senza guscio apparentemente facile ma che necessita di alcuni accorgimenti! Ci sono diversi modi per preparare le uova in camicia (o uova affogate), chiamate così proprio perché l'albume in cottura ingloba morbidamente il tuorlo, che rimane semi-liquido. Noi vi invitiamo a provare un metodo classico e semplice che richiederà pochi ingredienti ma molta precisione su movimenti e tempi di cottura. Vedrete in pochi minuti l'uovo crudo trasformarsi in una leccornia morbida e invitante, perfetta da servire sul pane casereccio abbrustolito per colazione come le tipiche uova alla Benedict, per un fantastico brunch con l'aggiunta di tartufo e tomino, oppure come secondo piatto, magari in coppia con gli asparagi. Le uova in camicia, d'altronde, sono ottime sempre!",
      time: 4,
    },
    {
      img: "https://www.giallozafferano.it/images/232-23251/Uova-fritte_450x300.jpg",
      ricetta: "Uova fritte",
      desc: "Le uova hanno l'incredibile potere di essere il salvacena per eccellenza, e a proposito, vogliamo parlare delle uova fritte? Una ricetta facile e veloce e di sicuro successo quando il tempo da dedicare ai fornelli scarseggia. Di varianti per cucinare le uova ve ne abbiamo proposte tantissime e fra queste le uova fritte possono gareggiare tranquillamente con le uova al tegamino. Del resto come si potrebbe resistere al loro profumino e alla deliziosa consistenza? In superficie l'albume diventa fragrante nascondendo il cuore fondente del tuorlo in cui inzuppare un pezzetto di pane. Una vera libidine! Avete fame? Anche noi, cuciniamo subito le uova fritte!",
      time: 3,
    },
    {
      img: "https://www.giallozafferano.it/images/232-23236/Uova-strapazzate_450x300.jpg",
      ricetta: "Uova strapazzate",
      desc: "Viva le uova, regine del brunch e della colazione all’americana! Dalle uova sode a quelle alla coque, sono tanti i modi per cucinarle, ma le varianti che vanno più spesso a braccetto con il bacon sono le uova strapazzate e in camicia. Per ottenere delle uova strapazzate morbide e cremose non c’è bisogno di aggiungere latte o panna, bastano pochi minuti e una frusta a mano con cui romperle al momento giusto! Perfette anche come salvacena, le uova strapazzate sono una ricetta tanto semplice quanto versatile… provatele in insalata per un pranzo veloce, per esempio!",
      time: 3,
    },
    {
      img: "https://www.giallozafferano.it/images/232-23254/Uova-al-tegamino_450x300.jpg",
      ricetta: "Uova al tegamino",
      desc: "Le uova al tegamino possono sembrare una ricetta banale, ma chi almeno una volta nella vita non le ha utilizzate come salvacena? Occorrono veramente pochi passaggi per prepararle e in pochi minuti porterete in tavola una ricetta davvero appetitosa, grazie al tuorlo fondente e alla morbidezza dell'albume. Ma per fare in modo che le uova risultino perfette senza che il tuorlo si cuocia eccessivamente e l'albume risulti asciutto bisognerà rispettare accuratamente i tempi di cottura! Preparate degli sfiziosi crostini di pane aromatizzati al rosmarino e lasciatevi travolgere da tutta la scioglievolezza del tuorlo! Provate anche la versione con funghi e promodori secchi per un piatto completo. E se non fosse per una cena? Servite l'uovo al tegamino con bacon e verdure per una colazione diversa dal solito!",
      time: 8,
    },
    {
      img: "https://www.giallozafferano.it/images/232-23247/Uova-in-cocotte_780x520_wm.jpg",
      ricetta: "Uova in cocotte",
      desc: "Per cucinare le uova ci sono tanti modi: fritte, alla coque, strapazzate... ognuno restituisce un risultato diverso seppur utilizzando lo stesso ingrediente. In questa ricetta vediamo come si preparano le uova in cocotte, uno dei patrimoni della cucina francese tradizionale. Nella preparazione classica occorre la panna e la cottura in forno ma noi abbiamo deciso di dare un'impronta più moderna usando il burro e cuocendo a bagnomaria. Le uova in cocotte vengono consumate come secondo piatto e possono essere servite in compagnia di carne, pesce, verdure e formaggi. Ma per apprezzarne al massimo la delicatezza bisogna gustarle in purezza, come vi suggeriamo. La difficoltà è bassa tuttavia la cottura perfetta è un po' il cruccio di chiunque voglia cimentarsi nella preparazione delle uova in cocotte. Grazie ai nostri consigli però riuscirete a ottenere albume morbido e tuorlo cremoso proprio come ve l'aspettate. Siete pronti? Si comincia!",
      time: 10,
    },
    {
      img: "https://www.giallozafferano.it/images/265-26585/Uova-alla-carrettiera_450x300.jpg",
      ricetta: "Uova alla carrettiera",
      desc: "Ispirate all'omonima pasta alla carrettiera, un primo piatto molto diffuso al Sud Italia, le uova alla carrettiera racchiudono lo stesso sapore e sono un'ottima alternativa per cucinare le uova. Le ricette con le uova che vi abbiamo proposto sono tantissime, ma se volete preparare delle uova fritte particolari e pronte in pochissimi minuti questa è la ricetta che fa per voi! La differenza stra proprio nella panatura aggiunta in un cottura, realizzata con pangrattato, aglio, pecorino e prezzemolo e tostata in padella per sprigionare tutti i sapori! Questa ricetta è perfetta da servire come secondo piatto... siamo certi diventerà il vostro salvacena per eccellenza; e non dimenticate di servirle con del pane, fresco o tostato, ideale per assaporare il loro tuorlo cremoso!",
      time: 6,
    },
    {
      img: "https://www.giallozafferano.it/images/221-22135/Uova-alla-contadina_450x300.jpg",
      ricetta: "Uova alla contadina",
      desc: "Le abbiamo fatte in camicia, ripiene, al forno con i porri, alla coque e sode... le uova sono sempre appetitose in ogni loro forma. E oggi vi proponiamo una ricetta della tradizione casalinga: le uova alla contadina, che fanno di semplicità virtù! Una rustica teglia condita generosamente con passata di pomodoro che avvolge le uova, aromi a piacere, uno strato filante di formaggio e il gioco è fatto, le uova non sono mai state così saporite! Le uova alla contadina sono un piatto frugale e non si contano le varianti custodite dalle famiglie che ne arricchiscono il gusto in modo sempre nuovo: c’è chi le prepara in padella, chi omette il formaggio o chi insaporisce con la cipolla, unica regola è che le uova siano intere, per il resto lasciatevi trasportare dal gusto e dalla fantasia!",
      time: 25,
    },
    {
      img: "https://www.giallozafferano.it/images/257-25711/Uova-indiavolate_780x520_wm.jpg",
      ricetta: "Uova indiavolate",
      desc: "I modi per cucinare le uova sono davvero tanti e per preparare queste deliziose uova indiavolate ci siamo ispirati alla ricetta delle uova alla contadina. Al posto del forno le abbiamo cotte in padella, all'interno di un sughetto saporito e piccante! Ciò che dà il nome alle uova indiavolate è proprio il loro gusto piccante... Nduja e peperoncino saranno ciò che caratterizza questa ricetta! Per un sapore ancora più ricco abbiamo aggiunto dei peperoni friggitelli a rondelle, che doneranno un aroma unico! Non dovrete fare altro che preparare queste facilissime uova indiavolate e munirvi di una bella pagnotta di pane fresco, la scarpetta è garantita!",
      time: 20,
    },
    {
      img: "https://www.giallozafferano.it/images/288-28890/Uova-in-purgatorio_450x300.jpg",
      ricetta: "Uova in purgatorio",
      desc: "Questo piatto è così sugoso che la scarpetta è d'obbligo... oggi prepariamo insieme le uova in purgatorio, un secondo piatto salva cena, perfetto per tutta la famiglia! Una ricetta che unisce ingredienti semplici ma ricchi di sapore, che facilmente abbiamo tutti a casa e che ci vengono incontro nelle giornate in cui c'è poco tempo o poca voglia di cucinare. Il tuorlo che si mescola alla salsa è una vera delizia, quindi munitevi di un buon pane casereccio e servitelo leggermente tostato per concludere il piatto in bellezza. Le uova in purgatorio sono facili e veloci da realizzare, che si può personalizzare con olive, capperi o formaggio. Preparatele anche voi e lasciatevi conquistare dal loro gusto semplice, ma mai banale!",
      time: 35,
    },
  ]);
});
s
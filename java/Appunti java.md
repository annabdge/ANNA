19/06/2025 Richard Moschini 
#### Linguaggio OOP - Object-Oriented Programming
Java linguaggio a oggetti, cosa sono e a cosa servono?
In Java si usano gli oggetti perché il linguaggio è orientato agli oggetti (OOP - Object-Oriented Programming). 
**Perché si usano gli oggetti in Java?**
1.	Organizzazione del codice: Gli oggetti permettono di raggruppare insieme dati (attributi) e comportamenti (metodi) relativi a una certa entità.
2.	Riutilizzabilità: Una volta creata una classe (cioè un modello per gli oggetti), puoi creare più oggetti simili senza riscrivere il codice.
3.	Manutenibilità: Il codice orientato agli oggetti è più facile da leggere, modificare e testare.
4.	Astrazione: Puoi concentrarti su cosa fa un oggetto invece di come lo fa.
5.	Modularità: Il codice può essere suddiviso in parti indipendenti (classi) che comunicano tra loro.
________________________________________
**A cosa servono gli oggetti?**
Gli oggetti in Java rappresentano istanze di classi. Ogni oggetto può:
•	contenere dati (es. un oggetto Studente ha nome, età, voto...)
•	eseguire operazioni (es. un metodo calcolaMedia() calcola la media dei voti)

```java
public class Studente {
    String nome;
    int eta;

    void saluta() {
        System.out.println("Ciao, mi chiamo " + nome);
    }
}
```

// Creazione di un oggetto
```java
Studente s1 = new Studente();
s1.nome = "Luca";
s1.eta = 17;
s1.saluta();  // Output: Ciao, mi chiamo Luca
```
In questo esempio:
•	Studente è una classe
•	s1 è un oggetto (istanza della classe Studente)
•	L’oggetto ha dati (nome, eta) e comportamenti (saluta())


#### Interfacce
sono un tipo speciale di struttura che serve a definire un contratto: dicono quali metodi una classe deve implementare, contengono la dichiarazione dei metodi che possono essere estesi a una classe ma non contengono il codice di quei metodi. 
Si possono avere anche più implementazioni. Istanziando le interfacce.
A cosa servono?
1. Imporre un comportamento comune a più classi diverse.
2. Favorire il polimorfismo (puoi trattare oggetti diversi allo stesso modo, se rispettano la stessa interfaccia).
3. Separare cosa fa dal come lo fa.

Sintassi base di un’interfaccia:
```java
public interface Animale {

    void emettiVerso();  // metodo senza corpo
}
```
🔹 Classe che implementa l’interfaccia:
```java
public class Cane implements Animale {

    public void emettiVerso() {
        System.out.println("Bau!");
    }
}
```

```java
public class Gatto implements Animale {

    public void emettiVerso() {
        System.out.println("Miao!");
    }

}
```
🔹 Uso pratico:
```java
public class Main {

    public static void main(String[] args) {

        Animale a1 = new Cane();
        Animale a2 = new Gatto();

        a1.emettiVerso();  // Output: Bau!
        a2.emettiVerso();  // Output: Miao!
    }
}
```

#### Classi astratte
Cosa sono le classi astratte?
Una classe astratta è una classe che:
-	non può essere istanziata direttamente (cioè non puoi fare new Astratta()),
-	può contenere sia metodi concreti (con corpo) sia metodi astratti (senza corpo, da implementare in sottoclassi),
-	serve come base comune per altre classi.
In pratica: è un modello incompleto che lascia alle sottoclassi il compito di completare ciò che manca.
**quando si usano?**
Usa una classe astratta quando:
-	Vuoi fornire un comportamento base comune a più classi.
-	Vuoi forzare le sottoclassi a implementare alcuni metodi.
-	Vuoi combinare metodi astratti e metodi già implementati.


```java
Public abstract class Astratta {


	public abstract String nome;	// metodo astratto

	public abstract String cognome(); // metodo astratto

	public string nomeCompleto() {

		return nome() + “ “ + cognome();
	}
}
```
Spiegazione:
-	`public abstract class Astratta` → è una classe astratta, cioè non puoi creare oggetti direttamente da essa.
-	`public abstract String nome();` → è un metodo astratto: non ha corpo, deve essere implementato da ogni sottoclasse.
-	`public String nomeCompleto()` → è un metodo concreto che usa nome() e cognome() per costruire il nome completo.

Per usare la classe Astratta, devi crearne una sottoclasse che implementa il metodo astratto:
`public class Persona extends Astratta { //override }`
oppure creare una classe anonima che estende la classe astratta Astratta e implementa direttamente i metodi astratti al momento della creazione dell’oggetto.
🔹 Uso:
```java
public class Main {

    public static void main(String[] args) {

        Astratta persona = new Persona() {
	
		@Override
    		public String nome() {
        	return "Anna";
   		}
	
		@Override
    		public String cognome() {
        	return "Berti";
   		}

	};

        System.out.println(persona.nomeCompleto());  // Output: Anna Berti
    }
}
```

#### Eccezioni
Di 2 tipi.
-	Checked 
-	Unchecked
1. CHECKED EXCEPTIONS
Sono le eccezioni controllate a compile-time.
Il compilatore ti obbliga a gestirle (con try/catch o con throws nel metodo).
Esempi comuni:
•	IOException
•	SQLException
•	FileNotFoundException
**Quando si usano?**
Quando l’errore è previsto e può ragionevolmente essere gestito: ad esempio, mancanza di un file, errore nel DB, ecc.

Esempio:
```java
import java.io.*;

public class FileEsempio {
    public static void leggiFile() throws IOException {
        BufferedReader reader = new BufferedReader(new FileReader("file.txt"));
        String riga = reader.readLine();
        reader.close();
    }
}
```
Se non gestisci l'eccezione IOException, il compilatore dà errore.
________________________________________
2. UNCHECKED EXCEPTIONS
Sono le eccezioni non controllate, cioè non obbligatorie da gestire a compile-time.
Derivano da RuntimeException.
Esempi comuni:
•	NullPointerException
•	ArrayIndexOutOfBoundsException
•	ArithmeticException
•	IllegalArgumentException
**Quando si usano?**
Quando l’errore è di programmazione, e non ha senso forzare la gestione ogni volta (es. divisione per zero, variabile null, accesso fuori dai limiti).
Esempio:
```java
public class Calcolatrice {
    public static void main(String[] args) {
        int x = 10 / 0;  // ArithmeticException (unchecked)
    }
}
```
Il compilatore non dà errore, ma il programma si bloccherà a runtime.

###### powerpoint eccezioni
[![[2.eccezioni_print.pdf]]]()





#### file di log

**cosa sono?**
Un file di log è un file di testo in cui un programma registra eventi, errori e informazioni sul suo funzionamento.
Servono per:
- Debugging → capire cosa succede quando il programma gira.
- Monitoraggio → controllare lo stato dell’applicazione in produzione.
- Analisi errori → avere traccia di eccezioni o comportamenti anomali.
- Audit → registrare azioni degli utenti o eventi di sistema.

Esempio di log (generico):
```
2025-09-02 10:15:33 INFO  [Server] - Avvio completato
2025-09-02 10:15:35 WARN  [DB] - Connessione lenta
2025-09-02 10:15:40 ERROR [Auth] - Login fallito per utente 'admin'
```

**Log4j**
Log4j (Log for Java) è una libreria Java sviluppata da Apache Foundation che serve proprio a gestire i log in modo flessibile e configurabile.
Con Log4j puoi decidere:
- Cosa loggare → livelli (TRACE, DEBUG, INFO, WARN, ERROR, FATAL).
- Dove loggare → console, file di testo, file XML, database, email, ecc.
- Come loggare → formattazione personalizzata dei messaggi.
Vantaggi:
- Separi il codice dall’output dei log (non usi System.out.println).
- Puoi cambiare configurazioni (livelli, destinazioni) senza ricompilare il codice → basta modificare il file log4j.properties o log4j.xml.
- Standard usato in tantissime applicazioni enterprise.

Esempio con Log4j
```java
import org.apache.log4j.Logger;

public class Main {
    private static final Logger logger = Logger.getLogger(Main.class);

    public static void main(String[] args) {
        logger.info("Applicazione avviata");
        logger.warn("Connessione lenta al database");
        logger.error("Errore critico: impossibile salvare i dati");
    }
}
```

#### framework
insieme di librerie che soddisfano le nostre esigenze. anche react potrebbe essere considerato un fw. 
si puo fare frontend solo con react. 
angular lo è a tutti gli effetti.
#### springboot 
insieme di librerie che ci aiutano a lavorare su progetti java. come li tiriamo giu sul maven? con gli starter. 
**cosa sono gli starter?**
Gli starter sono delle dipendenze preconfezionate che includono al loro interno un insieme di altre librerie necessarie per una certa funzionalità.
in pratica: invece di dover cercare e aggiungere manualmente tutte le librerie necessarie, basta inserire uno starter nel pom.xml e Maven scarica tutto il necessario.

esempi
- `spring-boot-starter-web` contiene librerie per sviluppare applicazioni web REST (Spring MVC, Jackson, Tomcat, ecc.).
- `spring-boot-starter-data-jpa` contiene tutto per lavorare con database relazionali tramite JPA/Hibernate.
- `spring-boot-starter-security` contiene le librerie per la sicurezza (autenticazione, autorizzazione).
- `spring-boot-starter-test` contiene framework per i test (JUnit, Mockito, ecc.).

Esempio di uso in pom.xml
```xml
<dependencies>
    <!-- Starter per applicazioni web -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
    </dependency>

    <!-- Starter per accedere al DB con JPA -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-data-jpa</artifactId>
    </dependency>

    <!-- Starter per i test -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-test</artifactId>
        <scope>test</scope>
    </dependency>
</dependencies>

```
#### maven

Si può vedere questo tool come una specie di ant “on steroids”: fornisce un metodo standard e uniforme per creare e gestire varie tipologie di progetto Java con le loro dipendenze. Tutta la magia è nel file pom.xml situato nella root dei sorgenti in cui si specificano e configurano nome, versione, dipendenze e plugin utilizzati.
Esiste un notevole numero di plugin che permettono di gestire tutti gli aspetti della vita di un progetto, dalla compilazione alla pacchettizzazione, dal testing al deploy alla generazione dei javadoc.
I progetti creati con maven sono gestibili nativamente da NetBeans, mentre per eclipse è necessario installare un apposito plugin e istruire maven affinchè generi i file di progetto necessari.

esempi:
-  mvn archetype:generate genera uno scheletro di progetto basandosi sulla tipologia, o archetipo, desiderato e sull’input dell’utente.
-  mvn clean pulisce la directory del progetto.
-  mvn compile compila i sorgenti.
-  mvn exec:java esegue l’applicazione, la MainClass è specificata nel pom.xml
-  mvn package genera il .jar del progetto. Mediante l’utilizzo dell’assembly plugin viene creato anche un file .jar contenente tutti i file .class delle dipendenze del progetto, in modo da avere un file autoeseguibile portabile.
-

#### lombok 
**a cosa serve?**
istanzia direttamente una classe per i log, si ha bisogno della libreria.
**Come si usa?**
- Getter e Setter automatici
```java
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class Todo {
    private Integer id;
    private String descrizione;
}
```

Non scrivi più `public Integer getId() { return id; }` ecc.

Lombok genera tutto automaticamente.

- Costruttore automatico
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
public class Todo {
    private Integer id;
    private String descrizione;
}


@NoArgsConstructor → crea il costruttore vuoto.

@AllArgsConstructor → crea il costruttore con tutti i campi come parametri.
#### docker 
premessa: da quando si è smesso di usare applicazioni monolitiche si sono iniziate ad usare servizi separati, per una maggiore scalabilità. 
architetture a microservizi = tanti applicativi con tante API. comunicano tra di loro, servizi che comunicano con altri servizi, bello ma questo rende piu difficile trovare l'errore.
con Docker per esempio posso creare **container**, ambiemti isolati che contengono tutto cio che serve ad un'applicazione, come codice, librerie, runtime, configurazioni.

ovviamente ci deve essere un orchestratore che colleghi questi servizi, e questo è per esempio docker. 

Esempio pratico
Supponiamo di avere:
- un microservizio backend Java
- un microservizio database PostgreSQL
- un microservizio frontend React
Con Docker creo un container per ciascuno, ognuno isolato ma connesso in rete agli altri.

#### RESTful Web Service

**Che cos'è rest?**
REST, Representational State Transfer, e uno stile architetturale per sistemi software distribuiti. Il termine e stato introdotto e definito nel 2000 da Roy Fielding, uno dei principali autori delle specifiche del protocollo HTTP. Indica una serie di principi architetturali per la progettazione di Web Service.

**resources**
Concetto centrale per un sistema RESTful e quello di risorsa. Una risorsa `e qualunque entit`a che possa essere indirizzabile tramite Web, cio è accessibile e trasferibile tra client e server. Spesso rappresenta un oggetto appartenente al dominio del problema che stiamo trattando.
 - un articolo di un sito di notizie
 - uno studente di una qualche universita
 - un’immagine in una web gallery
 - gli ultimi 20 tweets di un certo utente

Durante un’interazione tra client e server quello che viene trasferito e una rappresentazione dello stato interno della risorsa. Ad esempio l’ultimo post in un blog puo essere servito ad un browser come una pagina in formato html, mentre ad un news reader come un documento xml.

**HTTP**
Inizialmente REST venne descritto da Fielding nel contesto del protocollo HTTP e questo e il protocollo a livello Applicazione maggiormente utilizzato; ma un sistema RESTful si puo appoggiare ad un qualunque altro protocollo che fornisca un vocabolario altrettando ricco.
A differenza di altre specifiche per Web Service (es. SOAP) REST sfrutta infatti a pieno la semantica e la ricchezza dei comandi HTTP e le sue funzionalita come, ad esempio, la negoziazione dei contenuti.

HTTP, esempi

| richiesta         | significato                                                                |
| ----------------- | -------------------------------------------------------------------------- |
| GET articles/3    | recupera una rappresentazione dell’articolo desiderato                     |
| POST articles/    | crea un nuovo articolo, la cui rappresentazione e nel body della richiesta |
| PUT articles/54   | modifica l’articolo esistente                                              |
| DELETE articles/  | rimuove l’intera collezione di articoli                                    |

**Vincoli**
Perche un Web Service sia conforme alle specifiche REST deve avere alcune specifiche caratteristiche:
- architettura basata su client e server
- stateless. Ogni ciclo di request\response deve rappresentare un’interazione completa del client con il server. In questo modo non e necessario per mantenere informazioni sulla sessione utente, minimizzando l’uso di memoria del server e la sua complessita.
- uniformemente accessibile. Ogni risorsa deve avere un’indirizzo univoco e ogni risorsa di ogni sistema presenta la stessa interfaccia, precisamente quella individuata dal protocollo HTTP.

##### Jersey REST Framework
Jersey è l’implementazione di riferimento della specifica JAX-RS (JSR 311) per la realizzazione di Web Service RESTful su piattaforma Java.
Jersey permette di creare risorse semplicemente cosı come sviluppiamo POJO (Plain Old Java Object) utilizzando delle specifiche annotazioni per i metodi e le classi. In altre parole il framework si occupa di gestire le richieste HTTP e la negoziazione della rappresentazione e noi possiamo concentrarci alla soluzione del problema.
Per utilizzarlo è sufficiente che siano disponibili nel classpath le librerie jersey-core.jar, jersey-server.jar, jsr311-api.jar e asm.jar.

esempio semplice
```java
package com.sun.jersey.samples.helloworld.resources;
import javax.ws.rs.GET;
import javax.ws.rs.Produces;
import javax.ws.rs.Path;
// class will be at addressable at the URI "/helloworld"
@Path("/helloworld")
public class HelloWorldResource {
// The java method will process HTTP GET requests
@GET
/* The Java method will produce content identified by the
* MIME Media type "text/plain"
*/
@Produces("text/plain")
public String getMessage() {
return "Hello World";
}
}
```

HelloWorldResource e il piu semplice esempio di risorsa realizzabile tramite Jersey. 
Si tratta di una semplice classe java e il framework ricava informazioni sulla sua gestione tramite le annotazioni utilizzate.
- @Path indica la URI a cui la risorsa sarà raggiungibile, in questo caso sara, ad esempio http://www.example.com/helloworld. L’annotazione è posta al livello della dichiarazione della classe, quindi helloworld sarà il path di base per tutti i suoi metodi.
- @Produces specifica uno o più MIME-Type con cui lo stato della risorsa può essere trasferito al client che ne fa richiesta. Se il client non ne supporta neanche uno il framework risponderà con l’opportuno codice di errore HTTP.
- @GET evidenzia il comando HTTP che il metodo è incaricato di gestire.



#### [[springboot progetti | stuck]]
service, controller, repository. 
service sta nel mezzo e chiamera il repository.
Stack Architetturale

progetto con architettura a 3 livelli:

```
Controller Layer (Presentation)
       ↓
Service Layer (Business Logic)
       ↓
Repository Layer (Data Access)
       ↓
Database
```

#### Dipendenze e Responsabilità

 **1. Controller Layer** TodoController
- **Responsabilità**: Gestisce le richieste HTTP e le risposte
- **Dipende da**: TodoService
- **Annotazioni**: `@RestController`, `@RequestMapping`, `@GetMapping`, `@PostMapping`
- **Cosa fa**: Riceve richieste REST, chiama il service e restituisce JSON

**2. Service Layer** ([TodoService](cci:2://file:///c:/Users/user06_14_1/Documents/1.20%20Programmazione%20java%20framework%20di%20backend%20-Richard%20Moschini/accademia-its/src/main/java/accademia/liguria/its/service/TodoService.java:17:0-74:1))
- **Responsabilità**: Logica di business e orchestrazione
- **Dipende da**: [TodoRepository](cci:2://file:///c:/Users/user06_14_1/Documents/1.20%20Programmazione%20java%20framework%20di%20backend%20-Richard%20Moschini/accademia-its/src/main/java/accademia/liguria/its/repository/TodoRepository.java:12:0-19:1)
- **Annotazioni**: `@Service`
- **Cosa fa**: Elabora la logica applicativa, coordina operazioni, gestisce transazioni

**3. Repository Layer** ([TodoRepository](cci:2://file:///c:/Users/user06_14_1/Documents/1.20%20Programmazione%20java%20framework%20di%20backend%20-Richard%20Moschini/accademia-its/src/main/java/accademia/liguria/its/repository/TodoRepository.java:12:0-19:1))
- **Responsabilità**: Accesso ai dati e persistenza
- **Dipende da**: Database (tramite JPA/Hibernate)
- **Annotazioni**: `@Repository`, estende `JpaRepository`
- **Cosa fa**: Query SQL, operazioni CRUD

#### Flusso delle Dipendenze

```java
// Controller dipende dal Service
@Autowired
private TodoService todoService;

// Service dipende dal Repository  
private final TodoRepository todoRepository;

// Repository dipende dal Database (tramite JPA)
extends JpaRepository<Todo, Integer>
```

#### Modelli di Dati

- **[Todo](cci:2://file:///c:/Users/user06_14_1/Documents/1.20%20Programmazione%20java%20framework%20di%20backend%20-Richard%20Moschini/accademia-its/src/main/java/accademia/liguria/its/models/Todo.java:12:0-29:1)**: Entity JPA mappata sulla tabella `todo`
- **[TodoComplete](cci:2://file:///c:/Users/user06_14_1/Documents/1.20%20Programmazione%20java%20framework%20di%20backend%20-Richard%20Moschini/accademia-its/src/main/java/accademia/liguria/its/models/TodoComplete.java:6:0-15:1)**: DTO per query con JOIN (todo + priorità)

#### Vantaggi di questa Architettura

- **Separazione delle responsabilità**: Ogni layer ha un compito specifico
- **Testabilità**: Puoi testare ogni layer indipendentemente
- **Manutenibilità**: Modifiche in un layer non impattano gli altri
- **Riusabilità**: Il service può essere usato da più controller

Il **Service è nel mezzo** e fa da ponte tra il mondo HTTP (Controller) e il mondo dei dati (Repository)!
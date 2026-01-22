---
tags:
---

#### definizioni 
1. Azure
Microsoft Azure è una piattaforma cloud che fornisce servizi  come calcolo, storage, database, networking, sicurezza e strumenti DevOps.
Permette di eseguire applicazioni e infrastrutture senza dover gestire hardware fisico.
2. DevOps
DevOps è una metodologia che unisce sviluppo software (Dev) e operazioni IT (Ops) per automatizzare, velocizzare e rendere più affidabile tutto il ciclo di vita del software: sviluppo, test, rilascio, deploy e monitoraggio.
3. DevOps con Azure
In Azure, il DevOps è implementato tramite servizi che permettono:
- versionamento del codice (come gitHub)
- build automatiche,
- test automatizzati,
- deploy automatizzati,
- gestione dell'infrastruttura tramite codice,
- monitoraggio centralizzato.
Lo strumento centrale è Azure DevOps (suite di servizi per CI/CD e project management).
4. Azure DevOps
Piattaforma cloud che offre strumenti DevOps integrati:
- Boards → gestione progetti (kanban, backlog, sprint)
- Repos → repository Git
- Pipelines → CI/CD
- Artifacts → gestione pacchetti (npm, NuGet, ecc.)
- Test Plans → gestione test
Serve per creare, testare e distribuire software in modo automatizzato.


5. CI (Continuous Integration)
Processo che integra automaticamente il codice nel repository, esegue build e test per verificare che non ci siano errori dopo ogni modifica.

 6. CD (Continuous Delivery / Continuous Deployment)
Processo che distribuisce automaticamente nuove versioni del software in ambienti come Development, QA, Staging o Produzione.

 7. Pipeline
Una pipeline è una sequenza automatizzata di passi (build, test, deploy) definita in Azure DevOps o altri strumenti.
È il cuore del processo CI/CD.

8. Pipeline YAML
Una pipeline descritta tramite un file .yaml, versionato nel repository.
Il file YAML definisce:
- trigger (quando si esegue la pipeline)
- variabili
- condizioni
- deploy

9. YAML
YAML = YAML Ain’t Markup Language
È un linguaggio di serializzazione dati leggibile, usato per configurazioni (come Kubernetes e Azure Pipelines).
Funziona con indentazione, senza parentesi.

10. Deploy
Processo che consiste nel rilasciare e rendere disponibile una nuova versione di un’applicazione in un ambiente (dev, test, staging, produzione).
In contesto DevOps è automatico tramite pipeline.

11. Kubernetes
Kubernetes (K8s) è un orchestratore di container che gestisce:
scalabilità, distribuzione, networking, automazione dei container.
Su Azure è gestito tramite AKS (Azure Kubernetes Service).

12. AKS (Azure Kubernetes Service)
Servizio di Azure che fornisce un cluster Kubernetes completamente gestito.
Azure gestisce:
- nodi master,
- update,
- scaling,
- sicurezza.
Tu gestisci:
- i container,
- i deployment,
- i servizi.

12. Container
**Unità eseguibile** che include codice, librerie e dipendenze.
Si crea con Docker, e si esegue su Kubernetes, App Service o altre piattaforme.

13. Docker
Piattaforma per creare, impacchettare e distribuire container.
È spesso il punto di partenza per il deploy in AKS o ACR.

 14. ACR (Azure Container Registry)
Registro privato di immagini Docker su Azure.
Serve per conservare le immagini che verranno poi usate da AKS o App Service.

15. Kustomize / Helm (menzionati)
Strumenti per gestire configurazioni Kubernetes complesse.
- Helm → gestore di pacchetti per Kubernetes (chart).
- Kustomize → overlay di configurazioni YAML.

15. Manifest Kubernetes
File YAML (come la pipeline.yaml) che descrive risorse del cluster:
- Deployment
- Service
- Ingress (Route)
- ConfigMap
- Secret
- Namespace
- 
Esempio:
```
apiVersion: apps/v1
kind: Deployment
metadata:
  name: myapp
```

18. Artefatti
File generato dalla build e usato per il deploy.
perch e hanno senso??
- Distribuzione coerente: ogni macchina o ambiente riceve lo stesso file pronto all’uso
- Rilasci automatizzati: puoi deployare lo stesso artefatto su test, staging, produzione
- Tracciabilità: ogni build produce un artefatto numerato/versionato → sai esattamente cosa è stato rilasciato
- Riutilizzo: un artefatto può essere consumato da più progetti (es. librerie o pacchetti)

la pipeline di build lo crea..

poi la [[2025-12-10#Pipeline di Release**|pipeline di release]]:
- Prende l’artefatto
- Lo distribuisce in ambienti target (VM, App Service, container…)

18. Stage
Macro-fase della pipeline (es: Build, Test, Deploy).

19. Job
Gruppo di comandi eseguiti su un singolo agente.

 21. Step
Unità più piccola di una pipeline: un comando, un task o uno script.

 22. Trigger
Condizione che avvia la pipeline (es: push su branch main).

 23. Variable / Secrets
Valori usati nella pipeline.
I segreti vengono salvati: in Azure DevOps Library o in Azure Key Vault. (esempio username e password)

 24. Service Connection
Connessione sicura tra Azure DevOps e Azure per permettere il deploy.
Autentica la pipeline verso il cloud.

#### Microsoft Azure 
Azure è la piattaforma cloud di Microsoft, divisa in categorie principali:
**Compute**
* **VM** (macchine virtuali)
* **App Service** (hosting web serverless)
* **AKS – Azure Kubernetes Service**
* **Azure Functions** (serverless)

 **Storage**
* **Blob Storage** (file object storage)
* **Table Storage**
* **Queue Storage**
* **File Share**

**Database**
* Azure SQL
* CosmosDB
* PostgreSQL e MySQL managed
* Redis Cache

**Networking**
* **Virtual Network**
* **Subnet**
* **NAT gateway**
* **Application Gateway** (reverse proxy + WAF)
* **Load Balancer**
* **Private Endpoints**
* **DNS**

**Identity**
* **Azure Active Directory** (AAD)
* **Managed Identities** per accessi automatici

**Monitoring**
* **Azure Monitor**
* **Application Insights**
* **Log Analytics**


#### Azure DevOps. Cos’è e cosa include
Azure DevOps è la piattaforma Microsoft dedicata allo sviluppo software e ai processi DevOps.
 Comprende:
1. **Boards** → gestione task, kanban, sprint
2. **Repos** → repository Git
3. **Pipelines** → CI e CD automatizzati
4. **Test Plans** → test manuali e automatizzati
5. **Artifacts** → feed di pacchetti (NuGet, npm, Maven, ecc)

#### Pipelines CI/CD (DevOps)
In Azure DevOps puoi creare pipeline in due modi:

1) Classic Pipeline (GUI)
* Drag & drop
* Meno flessibile
* Meno usata in aziende moderne

1) YAML Pipeline
* File YAML versionato nel repo
* Standard moderno
* Riproducibile, scalabile, portabile
* 
###### File YAML – Struttura Essenziale
Una pipeline YAML ha una struttura base:

```yaml
trigger:
  - main

pool:
  vmImage: 'ubuntu-latest'

steps:
  - task: Bash@3
    inputs:
      targetType: 'inline'
      script: echo "Pipeline eseguita!"
```

**Elementi chiave:**
* `trigger`: quali branch fanno partire la CI
* `pool`: agente (VM temporanea che esegue la pipeline)
* `steps`: i comandi o task

Esempio completo:

```yaml
stages:
- stage: Build
  jobs:
    - job: BuildJob
      steps:
        - script: dotnet build

- stage: Deploy
  dependsOn: Build
  jobs:
    - job: DeployToProd
      steps:
        - script: echo "Deploy in produzione"
```


###### Pipeline CI – Continuous Integration
Serve a:
* compilare il codice
* eseguire i test
* effettuare static code analysis
* generare artefatti (binari o pacchetti)

###### Pipeline CD – Continuous Deployment
Usata per distribuire in:
* App Service
* VM
* AKS (Azure Kubernetes Service)
* Azure Functions
* Containers registrati su ACR (Azure Container Registry)


#### Azure Container Registry (ACR)
Registro container privato.
Pipeline tipica:
1. build immagine Docker
2. push (su ACR)
3. deploy (su AKS o App Service)

#### Kubernetes in Azure: AKS
AKS = Kubernetes gestito da Azure.
**Componenti:**
* Nodes (nodi)
* Pod
* Deployments
* Services (ClusterIP, LoadBalancer)
* Ingress Controller

###### esempi (da vedere)
**Deploy tramite pipeline:**
```yaml
- task: Kubernetes@1
  inputs:
    connectionType: 'Azure Resource Manager'
    command: apply
    useConfigurationFile: true
    configuration: 'k8s/deployment.yml'
```

Esempio deployment YAML K8s:
```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: app-deploy
spec:
  replicas: 2
  selector:
    matchLabels:
      app: myapp
  template:
    metadata:
      labels:
        app: myapp
    spec:
      containers:
        - name: app
          image: myacr.azurecr.io/app:latest
```


#### Service Connection 
Per la pipeline . serve autorizzarla a deployare:
Tipi:
* Service Principal (Azure RM)
* Kubernetes service connection 
* GitHub connection (se integri GitHub)

#### Variabili e Secrets
Conservati in:
* Variable Groups
* Library + Key Vault
* Parametri YAML

Esempio:
```yaml
variables:
  environment: production
  containerTag: $(Build.BuildId)
```

#### Testing
Pipelines supportano:
* Unit test
* Integration test
* Test automatici (Selenium, Playwright)
* Test infrastrutturali (Bicep, Terraform)

#### DevOps su Azure 
* usare YAML
* usare ambiente dev → staging → prod
* usare **approvals** e manual gates
* usare **service principals con permessi minimi**
* monitorare tutto con **Application Insights**
* salvare i secrets in **Key Vault**
* usare ACR se si usano container
* usare deployment Canary/Blue-Green su App Service o AKS

[^1]: 


# Cos’è un SDK (Software Development Kit)

Un **SDK** è un **insieme di strumenti necessari per sviluppare, compilare e costruire un software**.

- Non è il programma finale  
- Non è solo una libreria  
- È il _kit completo_ per **costruire** un’applicazione

### Un SDK include tipicamente:

- **Compiler** (trasforma il codice sorgente in binari)
    
- **Librerie standard**
    
- **Tool di build**
    
- **Tool di packaging**
    
- **Comandi da riga di comando**
    
- **API di base del linguaggio**
    

📌 Senza SDK **non puoi compilare** il codice.

---

## SDK ≠ Runtime (differenza fondamentale)

Questa distinzione è IMPORTANTISSIMA.

### 🔹 Runtime

- Serve **per eseguire** un programma già compilato
    
- È usato **in produzione**
    

### 🔹 SDK

- Serve **per sviluppare e costruire**
    
- È usato **in fase di build**
    

---

### Esempio concreto (.NET)

|Componente|Serve a|
|---|---|
|.NET Runtime|Eseguire l’app|
|.NET SDK|Compilare, testare, pubblicare|

Se hai solo il runtime:  
-  non puoi compilare  
-  non puoi fare `dotnet build`

Se hai l’SDK:  
-  puoi compilare  
-  puoi creare artefatti  
-  puoi pubblicare

---
### Esempio concreto (Java)

|Componente|Serve a|
|---|---|
|JRE (Java Runtime Environment)|Eseguire un `.jar`|
|JDK (Java Development Kit = SDK Java)|Compilare e costruire|

Il **JDK è l’SDK di Java**.

Dentro il JDK ci sono:

- `javac` → compiler
    
- `java` → runtime
    
- librerie standard
    
- tool di sviluppo
    

---

## Perché la pipeline “installa l’SDK”

Quando vedi in pipeline:

```yaml
UseDotNet@2
```

oppure in Java:

```yaml
UseJava@1
```

significa:

 _“Prepara la macchina di build con gli strumenti necessari per compilare il codice”_

Il **build agent**:

- è una macchina vuota
    
- non sa nulla del tuo progetto
    
- non ha SDK garantiti
    

La pipeline deve:  
rendere l’ambiente **riproducibile**

---

## Ora ricolleghiamo i 4 punti che citavi

> La pipeline:
> 
> - installa SDK
>     
> - compila
>     
> - impacchetta
>     
> - pubblica file
>     

Vediamoli **uno per uno**, con il significato preciso.

---

## 1️ Installa SDK

👉 Rende disponibile:

- compilatore
    
- tool di build
    
- librerie standard
    

### Esempi:

- C# → installa **.NET SDK**
    
- Java → installa **JDK**
    

Senza questo passo la pipeline **non può andare avanti**.

---

## Compila
Trasforma il codice sorgente in codice eseguibile/intermedio
### Esempi:
- C# → `dotnet build`
- Java → `mvn compile` / `javac`

Qui:
- si controllano errori
- si genera bytecode/binari
    

---

##  Impacchetta

Raccoglie il risultato della compilazione in un **artefatto distribuibile**

### Esempi:

- C# → dll / exe
    
- Java → jar / war
    
- Web → cartella di file
    

È il momento in cui il software diventa **trasportabile**.

---

## 4️ Pubblica file (artifact)
 Salva l’artefatto in un posto centrale (Azure DevOps, Nexus, Artifactory…)
Serve per:
- versionare il risultato
    
- scaricarlo
    
- deployarlo
    
- tenerne traccia
    

⚠️ Qui **non stai eseguendo l’app**, stai solo conservando il risultato.

---

## Collegamento con Docker (per fissarlo bene)

### Pipeline NO-container

- SDK → necessario
    
- Output → file
    
- Runtime → esterno
    

### Pipeline containerizzata

- SDK → spesso **dentro il Dockerfile**
    
- Output → immagine
    
- Runtime → incluso
    
Il Dockerfile **sposta l’SDK dentro il container**, ma non lo elimina.
---

## Frase riassuntiva (da ricordare)

> Un SDK è l’insieme di strumenti per costruire il software; il runtime serve solo a eseguirlo.

Se vuoi, al prossimo messaggio posso:

- spiegarti **SDK vs tool di build (Maven/Gradle)**
    
- farti uno **schema visivo mentale**
    
- collegarlo direttamente alla **pipeline Java che mi manderai**
    
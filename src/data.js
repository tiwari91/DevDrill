export const TOPIC_META = {
  "Spring Boot":     { icon: "Leaf",      gradient: "from-emerald-500 to-green-600",  borderAccent: "border-emerald-500", textAccent: "text-emerald-400", bgAccent: "bg-emerald-500/10" },
  "Docker":          { icon: "Container", gradient: "from-blue-500 to-cyan-600",      borderAccent: "border-blue-500",    textAccent: "text-blue-400",    bgAccent: "bg-blue-500/10" },
  "Kubernetes":      { icon: "Ship",      gradient: "from-indigo-500 to-purple-600",  borderAccent: "border-indigo-500",  textAccent: "text-indigo-400",  bgAccent: "bg-indigo-500/10" },
  "System Design":   { icon: "Network",   gradient: "from-amber-500 to-orange-600",   borderAccent: "border-amber-500",   textAccent: "text-amber-400",   bgAccent: "bg-amber-500/10" },
  "React JS":        { icon: "Atom",      gradient: "from-cyan-400 to-blue-500",      borderAccent: "border-cyan-500",    textAccent: "text-cyan-400",    bgAccent: "bg-cyan-500/10" },
  "Java Core":       { icon: "Coffee",    gradient: "from-red-500 to-rose-600",       borderAccent: "border-red-500",     textAccent: "text-red-400",     bgAccent: "bg-red-500/10" },
  "SQL & Databases": { icon: "Database",  gradient: "from-violet-500 to-purple-600",  borderAccent: "border-violet-500",  textAccent: "text-violet-400",  bgAccent: "bg-violet-500/10" },
  "Git":             { icon: "GitBranch", gradient: "from-orange-500 to-amber-600",   borderAccent: "border-orange-500",  textAccent: "text-orange-400",  bgAccent: "bg-orange-500/10" },
  "REST API Design": { icon: "Globe",     gradient: "from-teal-500 to-emerald-600",   borderAccent: "border-teal-500",    textAccent: "text-teal-400",    bgAccent: "bg-teal-500/10" },
  "AWS / Cloud":     { icon: "Cloud",     gradient: "from-sky-500 to-blue-600",       borderAccent: "border-sky-500",     textAccent: "text-sky-400",     bgAccent: "bg-sky-500/10" },
};

export const INTERVIEW_QUESTIONS = [
  // --- SPRING BOOT (1-25) ---
  {
    id: 1, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is the difference between @RestController and @Controller?",
    options: [
      "@RestController combines @Controller and @ResponseBody, writing data directly to the HTTP response as JSON",
      "@RestController is used only for SOAP-based web services",
      "@Controller is faster than @RestController for building REST APIs",
      "There is no difference — they are interchangeable aliases"
    ],
    correctOption: 0,
    answer: "@RestController is a convenience annotation that combines @Controller and @ResponseBody. It ensures that the data returned is written directly to the HTTP response body (usually as JSON) rather than looking for an HTML view template.",
    tips: "Mention that it simplifies the creation of RESTful web services."
  },
  {
    id: 2, topic: "Spring Boot", difficulty: "medium",
    scenario: "What is Dependency Injection, and how does Spring implement it?",
    options: [
      "DI is when objects create their own dependencies using the new keyword",
      "DI is a pattern where dependencies are provided externally; Spring uses ApplicationContext and @Autowired",
      "DI is a testing pattern that only works with @MockBean",
      "DI requires XML configuration and cannot use annotations"
    ],
    correctOption: 1,
    answer: "DI is a design pattern where an object's dependencies are provided by an external entity. Spring uses the ApplicationContext to manage 'Beans' and injects them using @Autowired.",
    tips: "Always recommend Constructor Injection over Field Injection for better testability."
  },
  {
    id: 3, topic: "Spring Boot", difficulty: "easy",
    scenario: "What are 'Starters' in Spring Boot?",
    options: [
      "Starters are runtime scripts that launch the Spring Boot application server",
      "Starters are convenience dependency descriptors that bundle libraries for a specific feature",
      "Starters are unit test templates provided by Spring Boot",
      "Starters are configuration files that replace application.properties"
    ],
    correctOption: 1,
    answer: "Starters are convenient dependency descriptors. They bundle together the libraries you need for a specific feature (e.g., 'spring-boot-starter-web' includes Tomcat and Jackson).",
    tips: "It's the 'opinionated' way of managing dependencies."
  },
  {
    id: 4, topic: "Spring Boot", difficulty: "medium",
    scenario: "How do you manage environment-specific configurations (Dev vs Prod)?",
    options: [
      "Use separate Git branches for each environment",
      "Use Spring Profiles with application-dev.properties and application-prod.properties",
      "Use @ConditionalOnClass to switch between environments",
      "Manually change application.properties before each deployment"
    ],
    correctOption: 1,
    answer: "Using Spring Profiles. You can create 'application-dev.properties' and 'application-prod.properties' and activate them using 'spring.profiles.active'.",
    tips: "Mention this is vital for CI/CD pipelines."
  },
  {
    id: 5, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is the role of Spring Boot Actuator?",
    options: [
      "It compiles Spring Boot applications into native executables",
      "It provides production-ready features like health checks, metrics, and monitoring endpoints",
      "It automatically generates REST API documentation",
      "It manages database migrations for Spring Boot apps"
    ],
    correctOption: 1,
    answer: "Actuator provides production-ready features like health checks, metrics, and info endpoints to monitor and manage your application.",
    tips: "Interviewers love hearing about monitoring (/health, /metrics)."
  },
  {
    id: 6, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is @Service vs @Component?",
    options: [
      "@Service creates a singleton; @Component creates a new instance each time",
      "@Service is a specialization of @Component indicating business logic; they behave the same technically",
      "@Service is for REST controllers; @Component is for repositories",
      "@Component is deprecated in favor of @Service"
    ],
    correctOption: 1,
    answer: "@Service is a specialization of @Component. It indicates that the class contains business logic. Technically they behave the same, but @Service is better for AOP and readability.",
    tips: "Use specializations like @Repository and @Service for better architecture."
  },
  {
    id: 7, topic: "Spring Boot", difficulty: "medium",
    scenario: "How do you handle exceptions globally in Spring Boot?",
    options: [
      "Use try-catch blocks in every controller method",
      "Use @RestControllerAdvice with @ExceptionHandler for consistent error responses",
      "Use @ErrorMapping annotation on each endpoint",
      "Configure exception handling in application.properties"
    ],
    correctOption: 1,
    answer: "Use @RestControllerAdvice and @ExceptionHandler. This allows you to catch exceptions across the entire application and return consistent JSON error responses.",
    tips: "This prevents exposing internal stack traces to users."
  },
  {
    id: 8, topic: "Spring Boot", difficulty: "hard",
    scenario: "Explain the difference between findById() and getReferenceById() in JPA.",
    options: [
      "findById() returns Optional; getReferenceById() throws an exception if not found",
      "They are identical — getReferenceById() is just the newer name",
      "findById() hits the DB immediately; getReferenceById() returns a lazy proxy that queries on property access",
      "findById() is for primary keys; getReferenceById() is for foreign keys"
    ],
    correctOption: 2,
    answer: "findById() hits the database immediately. getReferenceById() (formerly getOne) is lazy; it returns a proxy and only hits the DB when you access the object's properties.",
    tips: "This is a performance-focused question."
  },
  {
    id: 9, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is @Transactional?",
    options: [
      "It marks a class as a database entity",
      "It ensures a series of DB operations all succeed or all fail (atomicity)",
      "It enables caching for database queries",
      "It converts a method to an asynchronous operation"
    ],
    correctOption: 1,
    answer: "It ensures that a series of database operations either all succeed or all fail, maintaining Atomicity in ACID properties.",
    tips: "Default rollback happens for RuntimeExceptions, not checked exceptions."
  },
  {
    id: 10, topic: "Spring Boot", difficulty: "hard",
    scenario: "What is the N+1 Select problem?",
    options: [
      "A bug where the database returns N+1 duplicate rows",
      "One query fetches a list, then N additional queries fetch related data for each item",
      "A limitation where JPA can only handle N+1 tables in a join",
      "A thread-safety issue when N+1 users query simultaneously"
    ],
    correctOption: 1,
    answer: "It occurs when the app makes one query to fetch a list of entities and then N additional queries for their related data. Fix it using 'Join Fetch' or 'Entity Graphs'.",
    tips: "Crucial for high-performance apps."
  },
  {
    id: 11, topic: "Spring Boot", difficulty: "medium",
    scenario: "What is @Value vs @ConfigurationProperties?",
    options: [
      "@Value injects single properties; @ConfigurationProperties maps entire property blocks to a Java object",
      "@Value is for runtime values; @ConfigurationProperties is for compile-time constants",
      "@ConfigurationProperties is deprecated in favor of @Value",
      "They are identical but @Value uses YAML and @ConfigurationProperties uses .properties"
    ],
    correctOption: 0,
    answer: "@Value is for single properties. @ConfigurationProperties allows type-safe mapping of whole property blocks to a Java object.",
    tips: "@ConfigurationProperties is preferred for large configs."
  },
  {
    id: 12, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is a 'Bean' in Spring?",
    options: [
      "A Java class annotated with @Entity",
      "An object instantiated, assembled, and managed by the Spring IoC container",
      "A configuration file used by Spring Boot",
      "A special type of Java interface"
    ],
    correctOption: 1,
    answer: "A Bean is simply an object that is instantiated, assembled, and managed by the Spring IoC (Inversion of Control) container.",
    tips: "The ApplicationContext is the container."
  },
  {
    id: 13, topic: "Spring Boot", difficulty: "hard",
    scenario: "Explain Bean Lifecycle.",
    options: [
      "Create -> Use -> Destroy (three simple steps)",
      "Instantiate -> Populate Properties -> Awareness callbacks -> Post-process -> Init -> Post-process -> Ready",
      "Compile -> Load -> Inject -> Serialize -> Destroy",
      "Scan -> Register -> Validate -> Instantiate"
    ],
    correctOption: 1,
    answer: "The cycle includes: Instantiate -> Populate Properties -> Name Awareness -> Factory Awareness -> Post Process Before Init -> After Properties Set -> Custom Init -> Post Process After Init.",
    tips: "Mention @PostConstruct and @PreDestroy."
  },
  {
    id: 14, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is Spring Data JPA?",
    options: [
      "A JavaScript library for building forms in Spring Boot",
      "A layer on top of JPA/Hibernate that lets you create repositories by just writing interfaces",
      "A database migration tool similar to Flyway",
      "A separate framework unrelated to Spring Boot"
    ],
    correctOption: 1,
    answer: "It's a layer on top of JPA (Hibernate) that reduces boilerplate code. It allows you to create repositories by just writing interfaces.",
    tips: "Mention dynamic query methods like 'findByEmail'."
  },
  {
    id: 15, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is Hibernate?",
    options: [
      "A build tool for Java projects",
      "An ORM framework that maps Java classes to database tables",
      "A web server bundled with Spring Boot",
      "A caching library for Spring applications"
    ],
    correctOption: 1,
    answer: "Hibernate is an Object-Relational Mapping (ORM) framework that maps Java classes to database tables and Java data types to SQL data types.",
    tips: "It is the default JPA implementation in Spring Boot."
  },
  {
    id: 16, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is 'In-Memory Database'?",
    options: [
      "A database stored on SSD drives for fast access",
      "A database that resides entirely in RAM, like H2, used for testing and development",
      "A database that only stores metadata, not actual data",
      "A distributed database that caches data across multiple servers"
    ],
    correctOption: 1,
    answer: "A database that resides in RAM (like H2). It's extremely fast and used primarily for unit testing and development.",
    tips: "Data is lost when the app stops."
  },
  {
    id: 17, topic: "Spring Boot", difficulty: "medium",
    scenario: "How do you secure a Spring Boot app?",
    options: [
      "Using Spring Validation to check all request bodies",
      "Using Spring Security with SecurityFilterChain for authentication and authorization",
      "Using @Secured annotation on the main application class only",
      "Spring Boot apps are secure by default and need no additional configuration"
    ],
    correctOption: 1,
    answer: "Using Spring Security. You configure a SecurityFilterChain to handle Authentication (who you are) and Authorization (what you can do).",
    tips: "Mention JWT for stateless microservices."
  },
  {
    id: 18, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is BCrypt?",
    options: [
      "A symmetric encryption algorithm used for data in transit",
      "A password-hashing function with built-in salt to protect against rainbow table attacks",
      "A JSON encoding format used by Spring Security",
      "A two-factor authentication protocol"
    ],
    correctOption: 1,
    answer: "A password-hashing function that includes a 'salt' to protect against rainbow table attacks. It's the standard for Spring Security.",
    tips: "Never store passwords in plain text."
  },
  {
    id: 19, topic: "Spring Boot", difficulty: "medium",
    scenario: "What is @Mock vs @MockBean?",
    options: [
      "@Mock is for integration tests; @MockBean is for unit tests",
      "@Mock is for plain unit tests; @MockBean adds a mock to the Spring ApplicationContext for integration tests",
      "They are identical — use either one interchangeably",
      "@MockBean is deprecated in favor of @Mock"
    ],
    correctOption: 1,
    answer: "@Mock is for plain unit tests. @MockBean adds a mock to the Spring ApplicationContext for integration testing.",
    tips: "Use @Mock for speed, @MockBean for context."
  },
  {
    id: 20, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is the 'Fat JAR'?",
    options: [
      "A JAR that only contains compiled classes without dependencies",
      "A single executable JAR containing all code, dependencies, and an embedded web server",
      "A JAR file optimized for large-scale distributed systems",
      "A compressed JAR format that reduces file size by 50%"
    ],
    correctOption: 1,
    answer: "Spring Boot packages all your code and all dependencies (including a web server like Tomcat) into a single executable .jar file.",
    tips: "It makes deployment as simple as 'java -jar app.jar'."
  },
  {
    id: 21, topic: "Spring Boot", difficulty: "easy",
    scenario: "What is Spring Boot DevTools?",
    options: [
      "A CLI tool for generating Spring Boot project scaffolding",
      "A set of tools providing Live Reload and automatic restarts during development",
      "A debugging proxy for inspecting HTTP requests",
      "A performance profiler for production Spring Boot apps"
    ],
    correctOption: 1,
    answer: "A set of tools that improves the development experience, providing features like 'Live Reload' and automatic restarts when code changes.",
    tips: "It is automatically disabled in production."
  },
  {
    id: 22, topic: "Spring Boot", difficulty: "medium",
    scenario: "Explain @Async.",
    options: [
      "It marks a method to run in a separate thread, allowing the main thread to continue",
      "It schedules a method to run at a fixed time interval",
      "It makes a method non-blocking by converting it to reactive streams",
      "It queues a method for batch processing at shutdown"
    ],
    correctOption: 0,
    answer: "It marks a method to be executed in a separate thread, allowing the main thread to continue without waiting for the result.",
    tips: "Return CompletableFuture for asynchronous results."
  },
  {
    id: 23, topic: "Spring Boot", difficulty: "medium",
    scenario: "What is a 'Qualifer' in Spring?",
    options: [
      "It marks a bean as high-priority for injection",
      "It specifies which bean to inject when multiple beans of the same type exist",
      "It validates that a bean meets certain quality standards",
      "It restricts a bean to a specific Spring profile"
    ],
    correctOption: 1,
    answer: "When multiple beans of the same type exist, @Qualifier is used to specify exactly which bean should be injected.",
    tips: "Pairs well with @Autowired."
  },
  {
    id: 24, topic: "Spring Boot", difficulty: "hard",
    scenario: "What is 'Dirty Checking' in Hibernate?",
    options: [
      "A validation step that checks for SQL injection in queries",
      "Hibernate auto-detects changes to managed entities and updates the DB on transaction commit without calling save()",
      "A mechanism to detect corrupted data in the database",
      "A check that runs before each query to verify the database connection"
    ],
    correctOption: 1,
    answer: "Hibernate automatically detects changes to an object and updates the database when the transaction is committed, without you calling 'save()'.",
    tips: "It minimizes database updates."
  },
  {
    id: 25, topic: "Spring Boot", difficulty: "medium",
    scenario: "What is Spring Cloud Config?",
    options: [
      "A tool for containerizing Spring Boot microservices",
      "A central server that manages configuration for all microservices, usually backed by a Git repo",
      "A cloud deployment platform specifically for Spring Boot apps",
      "A monitoring dashboard for Spring Cloud applications"
    ],
    correctOption: 1,
    answer: "A central server that manages configuration files for all microservices in a distributed system, usually backed by a Git repo.",
    tips: "Allows for dynamic config changes without restarts."
  },

  // --- DOCKER (26-45) ---
  {
    id: 26, topic: "Docker", difficulty: "easy",
    scenario: "What is a Docker Image vs Container?",
    options: [
      "Image is a running process; Container is the stored template",
      "Image is a static blueprint/template; Container is the running instance of that image",
      "They are the same thing — just different names",
      "Image is for development; Container is for production only"
    ],
    correctOption: 1,
    answer: "Image is a template (blueprint). Container is the running instance. Image is static; Container is dynamic.",
    tips: "Class vs Object analogy."
  },
  {
    id: 27, topic: "Docker", difficulty: "easy",
    scenario: "What is the 'FROM' command in a Dockerfile?",
    options: [
      "It copies files from the host into the image",
      "It sets the base image for subsequent instructions — every Dockerfile must start with it",
      "It specifies the source code repository to pull from",
      "It defines the output directory for the built image"
    ],
    correctOption: 1,
    answer: "It sets the Base Image for the subsequent instructions. Every valid Dockerfile must start with FROM.",
    tips: "Example: FROM openjdk:17-alpine."
  },
  {
    id: 28, topic: "Docker", difficulty: "medium",
    scenario: "What is a 'Layer' in Docker?",
    options: [
      "A security boundary between containers on the same host",
      "Each Dockerfile instruction creates a cacheable layer; only changed layers are rebuilt",
      "A network abstraction for container communication",
      "A permission level assigned to Docker users"
    ],
    correctOption: 1,
    answer: "Each instruction in a Dockerfile creates a layer. Docker caches these layers to speed up future builds.",
    tips: "Only changed layers and those after it are rebuilt."
  },
  {
    id: 29, topic: "Docker", difficulty: "easy",
    scenario: "What is the '.dockerignore' file?",
    options: [
      "It lists containers that should not be auto-started",
      "It tells Docker which files/directories to exclude when building an image",
      "It specifies which Docker commands are disabled",
      "It lists images that should not be pulled from Docker Hub"
    ],
    correctOption: 1,
    answer: "It tells Docker which files or directories to ignore when building an image (like node_modules or .git).",
    tips: "Reduces build time and image size."
  },
  {
    id: 30, topic: "Docker", difficulty: "easy",
    scenario: "What is Docker Compose?",
    options: [
      "A GUI tool for managing Docker images",
      "A tool for defining and running multi-container applications using a YAML file",
      "A plugin that adds music/sound effects to Docker builds",
      "A CI/CD pipeline tool exclusively for Docker deployments"
    ],
    correctOption: 1,
    answer: "A tool for defining and running multi-container applications using a YAML file.",
    tips: "Commands: 'docker-compose up' and 'down'."
  },
  {
    id: 31, topic: "Docker", difficulty: "medium",
    scenario: "What is a Volume?",
    options: [
      "A mechanism for limiting container disk usage",
      "A mechanism for persisting data outside the container lifecycle",
      "The total storage capacity of a Docker image",
      "A read-only file system mounted into a container"
    ],
    correctOption: 1,
    answer: "A mechanism for persisting data generated by and used by Docker containers. Volumes exist outside the container lifecycle.",
    tips: "Essential for databases."
  },
  {
    id: 32, topic: "Docker", difficulty: "medium",
    scenario: "What is the difference between COPY and ADD?",
    options: [
      "COPY works with local files; ADD can also fetch remote URLs and auto-extract tar archives",
      "ADD is for text files; COPY is for binary files",
      "COPY is deprecated — always use ADD instead",
      "There is no difference; they are aliases"
    ],
    correctOption: 0,
    answer: "COPY is for local files. ADD can also fetch remote URLs and extract tar files automatically.",
    tips: "Standard practice is to use COPY unless you need ADD's extra features."
  },
  {
    id: 33, topic: "Docker", difficulty: "hard",
    scenario: "What is a 'Multi-stage build'?",
    options: [
      "Building an image across multiple Docker hosts simultaneously",
      "Using multiple FROM statements to build in one stage and copy only the artifact to a smaller production stage",
      "Running multiple Dockerfiles in sequence",
      "A build that requires multiple docker build commands"
    ],
    correctOption: 1,
    answer: "Using multiple FROM statements to build an app in one stage and copy only the final artifact to a smaller stage for production.",
    tips: "Drastically reduces image size."
  },
  {
    id: 34, topic: "Docker", difficulty: "easy",
    scenario: "What is 'Docker Hub'?",
    options: [
      "A local cache for Docker images on your machine",
      "A cloud-based registry for sharing and finding Docker images",
      "A networking tool for connecting Docker containers",
      "A Docker monitoring and logging service"
    ],
    correctOption: 1,
    answer: "A cloud-based registry for sharing and finding Docker images.",
    tips: "Like GitHub, but for containers."
  },
  {
    id: 35, topic: "Docker", difficulty: "easy",
    scenario: "How do you see running containers?",
    options: [
      "docker images",
      "docker ps (add -a for all including stopped)",
      "docker list --running",
      "docker show containers"
    ],
    correctOption: 1,
    answer: "Using the command 'docker ps'. Adding '-a' shows all containers, including stopped ones.",
    tips: "Basic but essential command."
  },
  {
    id: 36, topic: "Docker", difficulty: "easy",
    scenario: "What is 'Port Mapping'?",
    options: [
      "Assigning static IP addresses to containers",
      "Connecting a host port to a container port so external traffic can reach the app (e.g., -p 8080:8080)",
      "Restricting which ports a container can use internally",
      "Mapping DNS names to container ports"
    ],
    correctOption: 1,
    answer: "Connecting a host port to a container port so the outside world can access the app (e.g., -p 8080:8080).",
    tips: "Format is [Host Port]:[Container Port]."
  },
  {
    id: 37, topic: "Docker", difficulty: "medium",
    scenario: "What is the 'ENTRYPOINT'?",
    options: [
      "The directory where Docker stores images",
      "The main command that runs when a container starts, making it behave like an executable",
      "The first network interface assigned to a container",
      "The base image specified in FROM"
    ],
    correctOption: 1,
    answer: "The main command that runs when a container starts. It makes the container behave like an executable.",
    tips: "Cannot be easily overridden compared to CMD."
  },
  {
    id: 38, topic: "Docker", difficulty: "medium",
    scenario: "What is a 'Dangling Image'?",
    options: [
      "An image that's currently being used by a running container",
      "An untagged image not used by any container, usually leftover from builds",
      "An image that failed to upload to Docker Hub",
      "An image that references a deleted base image"
    ],
    correctOption: 1,
    answer: "An image that is not tagged and is not used by any container. Usually created during builds.",
    tips: "Clean them with 'docker image prune'."
  },
  {
    id: 39, topic: "Docker", difficulty: "medium",
    scenario: "What is 'Bridge Networking'?",
    options: [
      "A network that connects Docker to cloud services",
      "The default network driver creating a private network on the host for container-to-container communication",
      "A VPN tunnel between Docker hosts",
      "A network mode where containers share the host's network stack"
    ],
    correctOption: 1,
    answer: "The default network driver. It creates a private network inside the host so containers can talk to each other.",
    tips: "Use 'inspect' to see network details."
  },
  {
    id: 40, topic: "Docker", difficulty: "easy",
    scenario: "Explain the 'Interactive Mode'.",
    options: [
      "A mode that displays a GUI for Docker management",
      "Using -it flags to interact with the container's shell directly",
      "A mode that asks for confirmation before each Docker command",
      "A web-based terminal provided by Docker Desktop"
    ],
    correctOption: 1,
    answer: "Using '-it' (Interactive + TTY) allows you to interact with the container's shell directly.",
    tips: "Example: 'docker run -it ubuntu bash'."
  },
  {
    id: 41, topic: "Docker", difficulty: "medium",
    scenario: "What is 'Docker Swarm'?",
    options: [
      "A tool for stress-testing Docker containers",
      "Docker's native clustering and orchestration tool for managing multi-node deployments",
      "A logging aggregator for Docker containers",
      "A security scanning tool for Docker images"
    ],
    correctOption: 1,
    answer: "Docker's native clustering and orchestration tool. (Though K8s is more popular).",
    tips: "It's simpler to set up than Kubernetes."
  },
  {
    id: 42, topic: "Docker", difficulty: "medium",
    scenario: "How do you limit container resources?",
    options: [
      "Using Docker Compose 'resources' section only",
      "Using --memory and --cpus flags during docker run",
      "Resource limits are handled automatically by Docker",
      "By editing the container's /etc/limits.conf file"
    ],
    correctOption: 1,
    answer: "Using flags like '--memory' and '--cpus' during 'docker run'.",
    tips: "Prevents one container from crashing the whole host."
  },
  {
    id: 43, topic: "Docker", difficulty: "easy",
    scenario: "What is 'Image Tagging'?",
    options: [
      "Adding metadata labels to a Dockerfile",
      "Assigning a version or name to an image (e.g., myapp:v1.0)",
      "Marking an image as official on Docker Hub",
      "Encrypting an image with a security tag"
    ],
    correctOption: 1,
    answer: "Assigning a version or name to an image (e.g., myapp:v1.0).",
    tips: "The default tag is 'latest'."
  },
  {
    id: 44, topic: "Docker", difficulty: "hard",
    scenario: "What is a 'Distroless' image?",
    options: [
      "An image that works on any Linux distribution",
      "An image containing only your app and dependencies — no shell, no package manager",
      "An image without any networking capabilities",
      "A compressed image format for faster downloads"
    ],
    correctOption: 1,
    answer: "Images that contain only your application and its dependencies, with no shell or package manager.",
    tips: "Very secure and very small."
  },
  {
    id: 45, topic: "Docker", difficulty: "easy",
    scenario: "How do you remove all stopped containers?",
    options: [
      "docker rm --all",
      "docker container prune",
      "docker clean containers",
      "docker stop --remove-all"
    ],
    correctOption: 1,
    answer: "Use 'docker container prune'.",
    tips: "Saves disk space."
  },

  // --- KUBERNETES (46-65) ---
  {
    id: 46, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is a Pod?",
    options: [
      "A virtual machine running Kubernetes",
      "The smallest deployable unit in K8s — one or more containers sharing storage and network",
      "A cluster of Kubernetes nodes",
      "A configuration file for deploying applications"
    ],
    correctOption: 1,
    answer: "The smallest deployable unit in K8s. It contains one or more containers that share storage and network.",
    tips: "Containers in a Pod talk to each other via 'localhost'."
  },
  {
    id: 47, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is a Deployment?",
    options: [
      "The process of installing Kubernetes on a server",
      "A controller that manages Pod desired state, handling scaling, rolling updates, and self-healing",
      "A one-time job that runs a container to completion",
      "A manual process of copying containers to nodes"
    ],
    correctOption: 1,
    answer: "A controller that manages the desired state of Pods. It handles scaling, rolling updates, and self-healing.",
    tips: "If a Pod dies, the Deployment replaces it."
  },
  {
    id: 48, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a Service?",
    options: [
      "A background process running inside each container",
      "An abstract way to expose Pods as a network service with a stable IP address",
      "A monitoring tool for Kubernetes clusters",
      "A daemon that manages node health"
    ],
    correctOption: 1,
    answer: "An abstract way to expose an application running on a set of Pods as a network service. It provides a stable IP.",
    tips: "Types: ClusterIP, NodePort, LoadBalancer."
  },
  {
    id: 49, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is a Node?",
    options: [
      "A JavaScript runtime used by Kubernetes",
      "A worker machine (physical or virtual) where K8s schedules Pods",
      "A single container running inside a Pod",
      "A DNS record for a Kubernetes service"
    ],
    correctOption: 1,
    answer: "A worker machine (physical or virtual) where K8s installs Pods. Every node is managed by the Control Plane.",
    tips: "Nodes contain the Kubelet and Container Runtime."
  },
  {
    id: 50, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is 'kubectl'?",
    options: [
      "A GUI dashboard for Kubernetes",
      "The command-line tool to communicate with the Kubernetes API server",
      "A container runtime used by Kubernetes",
      "A Kubernetes package manager"
    ],
    correctOption: 1,
    answer: "The command-line tool used to communicate with the Kubernetes API server.",
    tips: "Example: 'kubectl get pods'."
  },
  {
    id: 51, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is a Namespace?",
    options: [
      "A label attached to every Kubernetes object",
      "A way to divide cluster resources between multiple users or teams (virtual clusters)",
      "The name of a Docker image registry",
      "A DNS suffix for services"
    ],
    correctOption: 1,
    answer: "A way to divide cluster resources between multiple users or teams (virtual clusters).",
    tips: "Default namespaces: default, kube-system, kube-public."
  },
  {
    id: 52, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is 'Self-healing'?",
    options: [
      "Automatically upgrading Kubernetes to the latest version",
      "K8s restarts failed containers, replaces pods, and kills pods that don't respond to health checks",
      "Automatically fixing code bugs in deployed containers",
      "Recovering from hardware failures by ordering new servers"
    ],
    correctOption: 1,
    answer: "The ability of K8s to restart containers that fail, replace pods, and kill pods that don't respond to health checks.",
    tips: "Managed by the Replication Controller/Deployment."
  },
  {
    id: 53, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is a ConfigMap?",
    options: [
      "A map of all nodes in the cluster",
      "An API object for storing non-confidential configuration data in key-value pairs",
      "A visual diagram of the cluster architecture",
      "A file that maps container ports to host ports"
    ],
    correctOption: 1,
    answer: "An API object used to store non-confidential data in key-value pairs.",
    tips: "Used for environment variables and config files."
  },
  {
    id: 54, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a Secret?",
    options: [
      "An encrypted network tunnel between pods",
      "A way to store sensitive information like passwords and tokens, stored in base64 format",
      "A hidden namespace not visible to regular users",
      "A private Docker registry accessible only within the cluster"
    ],
    correctOption: 1,
    answer: "A way to store sensitive information like passwords, OAuth tokens, and ssh keys.",
    tips: "Stored in base64 format."
  },
  {
    id: 55, topic: "Kubernetes", difficulty: "hard",
    scenario: "What is 'Horizontal Pod Autoscaler' (HPA)?",
    options: [
      "A tool that distributes pods evenly across all nodes",
      "Automatically scales the number of Pods based on observed CPU/memory utilization",
      "A mechanism that increases pod CPU and memory limits",
      "A load balancer that routes traffic horizontally across services"
    ],
    correctOption: 1,
    answer: "Automatically scales the number of Pods based on observed CPU utilization.",
    tips: "Requires Metrics Server to be installed."
  },
  {
    id: 56, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a 'Liveness Probe'?",
    options: [
      "A check that verifies the cluster is running",
      "Checks if a container is running — if it fails, K8s kills and restarts the container",
      "A monitoring tool that sends alerts when a pod is slow",
      "A probe that measures network latency between pods"
    ],
    correctOption: 1,
    answer: "Checks if the container is running. If it fails, K8s kills the container and starts a new one.",
    tips: "Fixes deadlock issues."
  },
  {
    id: 57, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a 'Readiness Probe'?",
    options: [
      "Checks if a node has enough resources to schedule new pods",
      "Checks if a container is ready to accept traffic — if it fails, the Pod is removed from Service endpoints",
      "Verifies that a Docker image is valid before deployment",
      "Checks if all ConfigMaps and Secrets are available"
    ],
    correctOption: 1,
    answer: "Checks if the container is ready to accept traffic. If it fails, the Pod is removed from the Service's endpoints.",
    tips: "Prevents users from seeing errors during startup."
  },
  {
    id: 58, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is an 'Ingress'?",
    options: [
      "The internal network between pods",
      "An API object that manages external HTTP access to services, with load balancing and SSL",
      "A logging mechanism for tracking incoming requests",
      "A security policy for incoming network traffic"
    ],
    correctOption: 1,
    answer: "An API object that manages external access to the services in a cluster, typically HTTP.",
    tips: "Can provide load balancing and SSL termination."
  },
  {
    id: 59, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a 'ReplicaSet'?",
    options: [
      "A backup of the entire Kubernetes cluster",
      "Ensures a specified number of pod replicas are running at any given time",
      "A set of identical Docker images stored in a registry",
      "A group of nodes that share the same configuration"
    ],
    correctOption: 1,
    answer: "Ensures that a specified number of pod replicas are running at any given time.",
    tips: "Deployment usually manages the ReplicaSet for you."
  },
  {
    id: 60, topic: "Kubernetes", difficulty: "hard",
    scenario: "What is a 'StatefulSet'?",
    options: [
      "A deployment that remembers user session data",
      "Used for stateful apps like databases — provides stable network IDs and persistent storage (pods named pod-0, pod-1)",
      "A set of pods that never restart",
      "A way to store application state in ConfigMaps"
    ],
    correctOption: 1,
    answer: "Used for stateful applications like databases. It provides stable network identifiers and persistent storage.",
    tips: "Pods are named pod-0, pod-1, etc."
  },
  {
    id: 61, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is 'Minikube'?",
    options: [
      "A lightweight version of Kubernetes for production",
      "A tool that runs a single-node K8s cluster locally for development and testing",
      "A minimized Docker image format",
      "A Kubernetes monitoring dashboard"
    ],
    correctOption: 1,
    answer: "A tool that runs a single-node Kubernetes cluster on your local computer for development and testing.",
    tips: "Perfect for learning K8s."
  },
  {
    id: 62, topic: "Kubernetes", difficulty: "hard",
    scenario: "What is the 'Control Plane'?",
    options: [
      "A web UI for managing Kubernetes resources",
      "The brain of the cluster — makes global decisions, includes API Server, Etcd, Scheduler, Controller Manager",
      "A dedicated node that only runs user applications",
      "A network layer that controls pod-to-pod traffic"
    ],
    correctOption: 1,
    answer: "The brains of the cluster. It makes global decisions and detects/responds to cluster events.",
    tips: "Includes API Server, Etcd, Scheduler, and Controller Manager."
  },
  {
    id: 63, topic: "Kubernetes", difficulty: "hard",
    scenario: "What is 'Etcd'?",
    options: [
      "A container runtime alternative to Docker",
      "A consistent, highly-available key-value store that backs all Kubernetes cluster data",
      "A tool for encrypting secrets in Kubernetes",
      "An event-driven messaging system for pods"
    ],
    correctOption: 1,
    answer: "A consistent and highly-available key-value store used as Kubernetes' backing store for all cluster data.",
    tips: "If etcd is lost, the cluster is lost."
  },
  {
    id: 64, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a 'Sidecar' container?",
    options: [
      "A container that runs after the main container exits",
      "A helper container running alongside the main app container in the same Pod",
      "A backup container that takes over if the main one fails",
      "A container that only handles health checks"
    ],
    correctOption: 1,
    answer: "A helper container that runs alongside the main application container in the same Pod.",
    tips: "Common for logging or proxying (e.g., Envoy)."
  },
  {
    id: 65, topic: "Kubernetes", difficulty: "easy",
    scenario: "What is 'Helm'?",
    options: [
      "A Kubernetes security hardening tool",
      "A package manager for Kubernetes that uses 'Charts' to deploy complex applications",
      "A GUI dashboard for monitoring K8s clusters",
      "A CLI alternative to kubectl"
    ],
    correctOption: 1,
    answer: "A package manager for Kubernetes. It uses 'Charts' to deploy complex applications.",
    tips: "Like npm or apt, but for K8s."
  },

  // --- SYSTEM DESIGN (66-85) ---
  {
    id: 66, topic: "System Design", difficulty: "medium",
    scenario: "Horizontal vs Vertical Scaling?",
    options: [
      "Horizontal adds more power to one server; Vertical adds more servers",
      "Vertical adds more power (CPU/RAM) to one server; Horizontal adds more servers to the pool",
      "Horizontal is for databases; Vertical is for web servers",
      "They are the same concept with different names"
    ],
    correctOption: 1,
    answer: "Vertical is adding more power (CPU/RAM) to one server. Horizontal is adding more servers to the pool.",
    tips: "Cloud apps prefer horizontal scaling."
  },
  {
    id: 67, topic: "System Design", difficulty: "easy",
    scenario: "What is a Load Balancer?",
    options: [
      "A tool that compresses network traffic to reduce bandwidth",
      "A device that distributes incoming traffic across a group of backend servers",
      "A server that caches frequently accessed data",
      "A monitoring tool that balances CPU usage across processes"
    ],
    correctOption: 1,
    answer: "A device that distributes incoming network traffic across a group of backend servers.",
    tips: "Ensures high availability and reliability."
  },
  {
    id: 68, topic: "System Design", difficulty: "easy",
    scenario: "What is Caching?",
    options: [
      "Compressing data to reduce storage costs",
      "Storing copies of data in a high-speed layer (like Redis) for faster future retrieval",
      "Encrypting sensitive data before storing it",
      "Backing up data to a secondary database"
    ],
    correctOption: 1,
    answer: "Storing copies of data in a high-speed storage layer (like Redis) so future requests for that data are served faster.",
    tips: "Reduces database load."
  },
  {
    id: 69, topic: "System Design", difficulty: "hard",
    scenario: "What is the CAP Theorem?",
    options: [
      "A theorem about CPU, Availability, and Performance optimization",
      "A distributed system can only guarantee two of three: Consistency, Availability, Partition Tolerance",
      "A rule that limits database connections to Capacity, Access, and Partitions",
      "A security model: Confidentiality, Authentication, Permissions"
    ],
    correctOption: 1,
    answer: "A distributed system can only provide two out of three: Consistency, Availability, and Partition Tolerance.",
    tips: "In a network partition, you must choose C or A."
  },
  {
    id: 70, topic: "System Design", difficulty: "medium",
    scenario: "What is Microservices Architecture?",
    options: [
      "Building the entire application as one deployable unit",
      "Building an app as a suite of small, independent services communicating via lightweight protocols",
      "A frontend architecture pattern for building small UI components",
      "A database design pattern for splitting tables into micro-partitions"
    ],
    correctOption: 1,
    answer: "An approach where an application is built as a suite of small, independent services.",
    tips: "Services communicate via lightweight protocols (REST/gRPC)."
  },
  {
    id: 71, topic: "System Design", difficulty: "medium",
    scenario: "What is an API Gateway?",
    options: [
      "A firewall that blocks malicious API requests",
      "A single entry point for microservices that handles routing, auth, and rate limiting",
      "A tool that generates API documentation automatically",
      "A database middleware for API queries"
    ],
    correctOption: 1,
    answer: "A server that acts as an entry point for a group of microservices. It handles routing, auth, and rate limiting.",
    tips: "Simplifies client-side code."
  },
  {
    id: 72, topic: "System Design", difficulty: "medium",
    scenario: "What is SQL vs NoSQL?",
    options: [
      "SQL is newer and faster; NoSQL is the legacy approach",
      "SQL is relational with schemas; NoSQL is non-relational, flexible, and often scales horizontally better",
      "SQL is for small data; NoSQL is only for big data",
      "There is no practical difference in modern databases"
    ],
    correctOption: 1,
    answer: "SQL is relational, structured, and uses schemas. NoSQL is non-relational, flexible, and often scales horizontally better.",
    tips: "Use SQL for complex queries; NoSQL for speed/scale."
  },
  {
    id: 73, topic: "System Design", difficulty: "hard",
    scenario: "What is Database Sharding?",
    options: [
      "Creating read replicas of a database",
      "Splitting a large database into smaller, faster parts (shards) distributed across multiple servers",
      "Encrypting database columns for security",
      "Compressing database tables to save storage"
    ],
    correctOption: 1,
    answer: "Splitting a large database into smaller, faster, more manageable parts called shards.",
    tips: "Data is distributed across multiple servers."
  },
  {
    id: 74, topic: "System Design", difficulty: "easy",
    scenario: "What is Content Delivery Network (CDN)?",
    options: [
      "A protocol for secure data transmission",
      "A system of distributed servers that deliver content based on user's geographic location",
      "A database designed for storing multimedia content",
      "A tool for compressing web content before delivery"
    ],
    correctOption: 1,
    answer: "A system of distributed servers that deliver web content to users based on their geographic location.",
    tips: "Reduces latency for images/static files."
  },
  {
    id: 75, topic: "System Design", difficulty: "medium",
    scenario: "What is a Message Queue?",
    options: [
      "A chat feature built into microservices",
      "An async communication protocol where sender and receiver don't interact with the queue simultaneously",
      "A priority system for sorting HTTP requests",
      "A logging mechanism that queues error messages"
    ],
    correctOption: 1,
    answer: "An asynchronous communication protocol where the sender and receiver don't need to interact with the queue at the same time.",
    tips: "Example: RabbitMQ, Kafka."
  },
  {
    id: 76, topic: "System Design", difficulty: "medium",
    scenario: "What is Rate Limiting?",
    options: [
      "Limiting the bandwidth of a server's network connection",
      "Limiting the number of API requests a user can make in a certain timeframe",
      "Restricting the rate at which data is written to the database",
      "Controlling how fast new features are released to users"
    ],
    correctOption: 1,
    answer: "A technique to limit the number of requests a user can make to an API in a certain timeframe.",
    tips: "Prevents abuse and DoS attacks."
  },
  {
    id: 77, topic: "System Design", difficulty: "easy",
    scenario: "What is DNS?",
    options: [
      "Distributed Network Storage — a cloud storage system",
      "Domain Name System — translates domain names to IP addresses",
      "Dynamic Node Scheduling — a Kubernetes feature",
      "Data Network Security — a firewall protocol"
    ],
    correctOption: 1,
    answer: "Domain Name System. It translates human-readable domain names (google.com) to IP addresses.",
    tips: "The phonebook of the internet."
  },
  {
    id: 78, topic: "System Design", difficulty: "medium",
    scenario: "What is 'High Availability'?",
    options: [
      "A system that uses the highest-end hardware available",
      "A design ensuring a prearranged level of uptime, measured in 'nines' (e.g., 99.9%)",
      "A system that's available only during business hours",
      "A deployment strategy that always uses the latest software version"
    ],
    correctOption: 1,
    answer: "A system design that ensures a prearranged level of operational performance (usually 'uptime') during a contractual measurement period.",
    tips: "Measured in 'nines' (e.g., 99.9%)."
  },
  {
    id: 79, topic: "System Design", difficulty: "easy",
    scenario: "What is a Monolith?",
    options: [
      "A single large server that handles all traffic",
      "A unified application where all components are interconnected in one deployable unit",
      "A database that stores all data in one table",
      "A design pattern for single-page applications"
    ],
    correctOption: 1,
    answer: "A traditional unified model for software program design where all components are interconnected and interdependent.",
    tips: "Easier to start, harder to scale."
  },
  {
    id: 80, topic: "System Design", difficulty: "medium",
    scenario: "What is Latency vs Throughput?",
    options: [
      "Latency is server cost; Throughput is network cost",
      "Latency is time for a single request; Throughput is requests handled per time period",
      "Latency is for reads; Throughput is for writes",
      "They measure the same thing in different units"
    ],
    correctOption: 1,
    answer: "Latency is the time it takes for a single request to complete. Throughput is the number of requests handled in a time period.",
    tips: "Low latency + High throughput is the goal."
  },
  {
    id: 81, topic: "System Design", difficulty: "medium",
    scenario: "What is a Proxy Server?",
    options: [
      "A backup server that activates during outages",
      "An intermediary server that forwards requests between clients and other servers",
      "A server that only handles static file serving",
      "A development server for testing locally"
    ],
    correctOption: 1,
    answer: "An intermediary server that forwards requests from clients to other servers.",
    tips: "Forward proxy protects clients; Reverse proxy protects servers."
  },
  {
    id: 82, topic: "System Design", difficulty: "hard",
    scenario: "What is 'Eventual Consistency'?",
    options: [
      "Data is always consistent across all nodes at all times",
      "Given no new updates, all replicas will eventually return the last updated value",
      "Consistency is optional and can be disabled for performance",
      "The database eventually becomes consistent after a full reboot"
    ],
    correctOption: 1,
    answer: "A consistency model that guarantees that if no new updates are made to a data item, eventually all accesses to that item will return the last updated value.",
    tips: "Common in distributed NoSQL systems."
  },
  {
    id: 83, topic: "System Design", difficulty: "hard",
    scenario: "What is 'Circuit Breaker' pattern?",
    options: [
      "A pattern that limits database connections",
      "Prevents an application from repeatedly trying to execute an operation that's likely to fail",
      "A security pattern that blocks requests after authentication failure",
      "A networking pattern that splits traffic across multiple paths"
    ],
    correctOption: 1,
    answer: "Prevents an application from repeatedly trying to execute an operation that's likely to fail.",
    tips: "Improves fault tolerance in microservices."
  },
  {
    id: 84, topic: "System Design", difficulty: "medium",
    scenario: "What is 'Sticky Sessions'?",
    options: [
      "Sessions that persist even after the browser is closed",
      "A load balancing technique routing all requests from one user to the same server",
      "Sessions stored in cookies instead of server memory",
      "A caching strategy for session data in Redis"
    ],
    correctOption: 1,
    answer: "A load balancing technique where all requests from a single user are routed to the same server for the duration of their session.",
    tips: "Required for stateful servers."
  },
  {
    id: 85, topic: "System Design", difficulty: "easy",
    scenario: "What is a 'Health Check'?",
    options: [
      "A security audit of the application code",
      "A mechanism for load balancers to determine if a server can handle requests",
      "A performance benchmark run during deployment",
      "A log analysis tool that checks for errors"
    ],
    correctOption: 1,
    answer: "A mechanism for a load balancer or orchestrator to determine if a server is capable of handling requests.",
    tips: "Usually a simple GET /health endpoint."
  },

  // --- REACT / FRONTEND (86-100) ---
  {
    id: 86, topic: "React JS", difficulty: "easy",
    scenario: "What is the Virtual DOM?",
    options: [
      "A separate browser built into React for testing",
      "A lightweight in-memory representation of the real DOM — React diffs it to update only what changed",
      "A server-side rendering technique",
      "A virtual machine that runs React applications"
    ],
    correctOption: 1,
    answer: "A lightweight representation of the real DOM. React updates the Virtual DOM first, then 'diffs' it with the real DOM to update only what changed.",
    tips: "This is why React is fast."
  },
  {
    id: 87, topic: "React JS", difficulty: "easy",
    scenario: "State vs Props?",
    options: [
      "State is for CSS styling; Props are for data",
      "Props are external data passed in (immutable); State is internal data managed within the component (mutable)",
      "State is global; Props are local to a component",
      "They are the same — use either interchangeably"
    ],
    correctOption: 1,
    answer: "Props are external data passed into a component (like function arguments). State is internal data managed within the component.",
    tips: "Props are immutable; State is mutable."
  },
  {
    id: 88, topic: "React JS", difficulty: "easy",
    scenario: "What is a React Hook?",
    options: [
      "A way to connect React to a backend API",
      "A function that lets you use state and lifecycle features in function components",
      "A plugin system for adding third-party features to React",
      "A debugging tool built into React DevTools"
    ],
    correctOption: 1,
    answer: "A function that lets you 'hook into' React state and lifecycle features from function components.",
    tips: "Examples: useState, useEffect."
  },
  {
    id: 89, topic: "React JS", difficulty: "medium",
    scenario: "What is useEffect?",
    options: [
      "A hook for adding CSS effects and animations",
      "A hook for performing side effects like data fetching and subscriptions in function components",
      "A hook that replaces all class lifecycle methods automatically",
      "A hook for optimizing component re-rendering performance"
    ],
    correctOption: 1,
    answer: "A hook for performing side effects (data fetching, subscriptions, manual DOM changes) in function components.",
    tips: "The second argument (dependency array) is crucial."
  },
  {
    id: 90, topic: "React JS", difficulty: "medium",
    scenario: "What is the 'Key' prop in lists?",
    options: [
      "An encryption key for securing component data",
      "A unique identifier helping React track which list items have changed, been added, or removed",
      "A required prop that sets the component's CSS class",
      "A prop that determines the rendering order of components"
    ],
    correctOption: 1,
    answer: "A unique identifier used by React to track which items have changed, been added, or removed.",
    tips: "Avoid using array indexes as keys."
  },
  {
    id: 91, topic: "React JS", difficulty: "medium",
    scenario: "What is 'Lifting State Up'?",
    options: [
      "Moving state to a global store like Redux",
      "Moving shared state to the closest common ancestor of components that need it",
      "Copying state from child to parent using props",
      "Storing state in the URL query parameters"
    ],
    correctOption: 1,
    answer: "Moving shared state to the closest common ancestor of components that need it.",
    tips: "Used to share data between sibling components."
  },
  {
    id: 92, topic: "React JS", difficulty: "medium",
    scenario: "What is Redux?",
    options: [
      "A React component library for building forms",
      "A predictable state container for managing global state that many components need",
      "A server-side rendering framework for React",
      "A CSS-in-JS library for styling React components"
    ],
    correctOption: 1,
    answer: "A predictable state container for JavaScript apps. It helps manage 'global' state that many components need.",
    tips: "Useful for large, complex applications."
  },
  {
    id: 93, topic: "React JS", difficulty: "medium",
    scenario: "What is the Context API?",
    options: [
      "An API for accessing browser context like cookies and localStorage",
      "A way to share data across the component tree without manually passing props through every level",
      "A server-side API for pre-rendering React components",
      "A testing API for providing mock context to components"
    ],
    correctOption: 1,
    answer: "A way to share data (like themes or auth) without passing props manually through every level of the tree.",
    tips: "Alternative to Redux for smaller apps."
  },
  {
    id: 94, topic: "React JS", difficulty: "easy",
    scenario: "What is JSX?",
    options: [
      "A new JavaScript standard that replaces ES6",
      "A syntax extension for JavaScript that looks like HTML, making React components more readable",
      "A JSON-based configuration format for React",
      "A JavaScript XML parser library"
    ],
    correctOption: 1,
    answer: "A syntax extension for JavaScript that looks like HTML. It makes writing React components much more readable.",
    tips: "Browsers cannot read JSX; it must be transpiled by Babel."
  },
  {
    id: 95, topic: "React JS", difficulty: "medium",
    scenario: "Explain 'Controlled Components'.",
    options: [
      "Components that are restricted from re-rendering",
      "Components where form data is handled by React state, with the input value driven by state",
      "Components that can only receive props, never have state",
      "Components wrapped in an error boundary for crash protection"
    ],
    correctOption: 1,
    answer: "Components where form data is handled by a React component's state, rather than by the DOM itself.",
    tips: "The 'value' of the input is set by the state."
  },
  {
    id: 96, topic: "React JS", difficulty: "easy",
    scenario: "What is 'Single Page Application' (SPA)?",
    options: [
      "A web app that can only have one page of content",
      "A web app that loads one HTML page and dynamically updates content without full page reloads",
      "A web app optimized for single-screen mobile devices",
      "A web app that uses only one JavaScript file"
    ],
    correctOption: 1,
    answer: "A web app that loads a single HTML page and dynamically updates the content as the user interacts, without full page reloads.",
    tips: "React is primarily used to build SPAs."
  },
  {
    id: 97, topic: "React JS", difficulty: "easy",
    scenario: "What is React Router?",
    options: [
      "A server-side routing framework",
      "The standard library for client-side routing in React, keeping UI in sync with the URL",
      "A tool for routing API requests to microservices",
      "A network routing library for React Native"
    ],
    correctOption: 1,
    answer: "The standard library for routing in React. It allows you to navigate between different components while keeping the UI in sync with the URL.",
    tips: "Enables multi-page feel in an SPA."
  },
  {
    id: 98, topic: "React JS", difficulty: "easy",
    scenario: "What is 'Conditional Rendering'?",
    options: [
      "Rendering components only on certain devices",
      "Rendering different UI elements based on conditions, using if/else or ternary operators",
      "Pre-rendering components on the server conditionally",
      "Rendering components in a specific order based on priority"
    ],
    correctOption: 1,
    answer: "Rendering different UI elements based on certain conditions (usually using if/else or ternary operators).",
    tips: "Example: {isLoggedIn ? <UserMenu /> : <LoginButton />}."
  },
  {
    id: 99, topic: "React JS", difficulty: "easy",
    scenario: "What is 'Fragment'?",
    options: [
      "A way to split a large component into smaller files",
      "A way to group children elements without adding extra DOM nodes",
      "A partial rendering technique for lazy loading",
      "A code-splitting strategy for reducing bundle size"
    ],
    correctOption: 1,
    answer: "A way to group a list of children without adding extra nodes to the DOM.",
    tips: "Use <></> syntax."
  },
  {
    id: 100, topic: "React JS", difficulty: "medium",
    scenario: "What is 'Prop Drilling'?",
    options: [
      "A technique for deep cloning props in nested components",
      "Passing data through multiple component levels that don't need it, just to reach a deeply nested component",
      "A debugging technique for tracing prop values",
      "A performance optimization for frequently updated props"
    ],
    correctOption: 1,
    answer: "The process of passing data through multiple levels of components that don't need it, just to get it to a deeply nested component.",
    tips: "Avoid it using Context API or Redux."
  },

  // --- JAVA CORE (101-115) ---
  {
    id: 101, topic: "Java Core", difficulty: "easy",
    scenario: "What are the four pillars of OOP?",
    options: [
      "Classes, Objects, Methods, Variables",
      "Encapsulation, Inheritance, Polymorphism, Abstraction",
      "Compilation, Execution, Debugging, Testing",
      "Interfaces, Abstract Classes, Generics, Annotations"
    ],
    correctOption: 1,
    answer: "Encapsulation (data hiding), Inheritance (reuse via parent-child), Polymorphism (many forms — method overloading/overriding), and Abstraction (hiding implementation details).",
    tips: "Use real-world analogies: Animal -> Dog inheritance."
  },
  {
    id: 102, topic: "Java Core", difficulty: "medium",
    scenario: "What is the difference between == and .equals() in Java?",
    options: [
      "== compares values; .equals() compares types",
      "== compares references (memory addresses); .equals() compares values/content",
      "They are identical for all Java objects",
      "== is for primitives only; .equals() is for objects only and they do the same comparison"
    ],
    correctOption: 1,
    answer: "== compares references (memory addresses). .equals() compares values/content. For Strings, always use .equals().",
    tips: "String pool makes this tricky — 'new String(\"abc\") == \"abc\"' is false."
  },
  {
    id: 103, topic: "Java Core", difficulty: "medium",
    scenario: "What is the difference between ArrayList and LinkedList?",
    options: [
      "ArrayList stores objects; LinkedList stores primitives",
      "ArrayList uses a dynamic array (fast access O(1)); LinkedList uses a doubly-linked list (fast insert/delete at known positions)",
      "ArrayList is thread-safe; LinkedList is not",
      "LinkedList is faster than ArrayList in all scenarios"
    ],
    correctOption: 1,
    answer: "ArrayList uses a dynamic array (fast random access O(1), slow insert/delete O(n)). LinkedList uses a doubly-linked list (slow access O(n), fast insert/delete O(1) at known positions).",
    tips: "ArrayList is preferred in most cases due to CPU cache locality."
  },
  {
    id: 104, topic: "Java Core", difficulty: "hard",
    scenario: "Explain the Java Memory Model — Stack vs Heap.",
    options: [
      "Stack and Heap are the same memory area with different access patterns",
      "Stack stores method frames and local variables per thread; Heap stores objects shared across threads and is garbage collected",
      "Stack is for static data; Heap is for dynamic data only in multi-threaded apps",
      "Stack is managed by the developer; Heap is managed by the OS"
    ],
    correctOption: 1,
    answer: "Stack stores method frames and local variables (per thread, LIFO). Heap stores objects and instance variables (shared across threads, garbage collected). Primitives go on stack; objects go on heap with references on stack.",
    tips: "Stack is fast but small; Heap is large but slower."
  },
  {
    id: 105, topic: "Java Core", difficulty: "medium",
    scenario: "What is the difference between HashMap and ConcurrentHashMap?",
    options: [
      "HashMap is faster because ConcurrentHashMap uses encryption",
      "HashMap is not thread-safe; ConcurrentHashMap uses segment/CAS-based locking for thread-safe operations",
      "ConcurrentHashMap doesn't allow null keys; that's the only difference",
      "HashMap is for small maps; ConcurrentHashMap is for large maps"
    ],
    correctOption: 1,
    answer: "HashMap is not thread-safe. ConcurrentHashMap uses segment-level locking (Java 7) or CAS operations (Java 8+) for thread-safe operations without locking the entire map.",
    tips: "Never use Hashtable — it locks the whole map."
  },
  {
    id: 106, topic: "Java Core", difficulty: "medium",
    scenario: "What are Java Streams and why use them?",
    options: [
      "Streams are I/O channels for reading files and network data",
      "A functional-style API for processing collections with filter, map, reduce — supports lazy evaluation and parallelism",
      "Streams are a threading API for concurrent data processing",
      "Streams are a way to stream data over HTTP in Java web apps"
    ],
    correctOption: 1,
    answer: "Streams provide a functional-style API for processing collections. They support operations like filter, map, reduce, and collect. They enable lazy evaluation and easy parallelism.",
    tips: "Streams don't modify the source collection."
  },
  {
    id: 107, topic: "Java Core", difficulty: "hard",
    scenario: "What is the difference between Callable and Runnable?",
    options: [
      "Callable is for synchronous tasks; Runnable is for asynchronous tasks",
      "Runnable.run() returns void and can't throw checked exceptions; Callable.call() returns a value and can throw checked exceptions",
      "Callable is deprecated in favor of Runnable since Java 8",
      "Runnable uses threads; Callable uses processes"
    ],
    correctOption: 1,
    answer: "Runnable's run() returns void and can't throw checked exceptions. Callable's call() returns a value (Future<V>) and can throw checked exceptions. Callable is used with ExecutorService.",
    tips: "Use Callable when you need a result from a thread."
  },
  {
    id: 108, topic: "Java Core", difficulty: "easy",
    scenario: "What is an Interface vs Abstract Class?",
    options: [
      "Interfaces can have constructors; Abstract classes cannot",
      "Interface defines a contract (all methods abstract by default); Abstract class can have both abstract and concrete methods. Multiple interfaces, one abstract class.",
      "Abstract classes are faster than interfaces at runtime",
      "Interfaces are only for Java 8+; Abstract classes work in all versions"
    ],
    correctOption: 1,
    answer: "Interface defines a contract (what to do) with no state — all methods are abstract by default. Abstract class can have both abstract and concrete methods, plus instance variables. A class can implement multiple interfaces but extend only one abstract class.",
    tips: "Since Java 8, interfaces can have default methods."
  },
  {
    id: 109, topic: "Java Core", difficulty: "medium",
    scenario: "What is Generics in Java?",
    options: [
      "A way to generate Java code automatically from templates",
      "Type-safe code that works with different types (e.g., List<String>), providing compile-time checking and eliminating casting",
      "A design pattern for creating generic factory methods",
      "A runtime feature that dynamically determines object types"
    ],
    correctOption: 1,
    answer: "Generics allow you to write type-safe code that works with different types. For example, List<String> ensures only Strings can be added. It provides compile-time type checking and eliminates casting.",
    tips: "Type erasure means generics are removed at runtime."
  },
  {
    id: 110, topic: "Java Core", difficulty: "hard",
    scenario: "What is the volatile keyword?",
    options: [
      "It marks a variable as constant (cannot be changed)",
      "It ensures a variable is always read from/written to main memory, guaranteeing visibility across threads but not atomicity",
      "It makes a variable thread-local (each thread gets its own copy)",
      "It enables garbage collection for that variable"
    ],
    correctOption: 1,
    answer: "volatile ensures that a variable is always read from and written to main memory (not cached per thread). It guarantees visibility across threads but NOT atomicity.",
    tips: "Use AtomicInteger for atomic operations."
  },
  {
    id: 111, topic: "Java Core", difficulty: "easy",
    scenario: "What is the final keyword?",
    options: [
      "It marks code to run at the end of a method",
      "final variable = constant, final method = can't override, final class = can't extend",
      "It finalizes an object for garbage collection",
      "It's the same as the finally block in try-catch"
    ],
    correctOption: 1,
    answer: "final variable = constant (can't reassign). final method = can't override. final class = can't extend. It's used for immutability and security.",
    tips: "String is a final class in Java."
  },
  {
    id: 112, topic: "Java Core", difficulty: "hard",
    scenario: "What is the difference between synchronized and ReentrantLock?",
    options: [
      "synchronized is for methods; ReentrantLock is for variables",
      "synchronized auto-releases on exit; ReentrantLock offers tryLock, timed waits, interruptible locking, and fairness — must manually unlock",
      "ReentrantLock is synchronized but faster",
      "synchronized works across JVMs; ReentrantLock is single-JVM only"
    ],
    correctOption: 1,
    answer: "synchronized is a keyword that auto-releases on exit. ReentrantLock is a class offering more control: tryLock(), timed waits, interruptible locking, and fairness policies. ReentrantLock must be manually unlocked in a finally block.",
    tips: "Prefer synchronized for simplicity; ReentrantLock for advanced scenarios."
  },
  {
    id: 113, topic: "Java Core", difficulty: "medium",
    scenario: "What is Optional in Java?",
    options: [
      "A collection that holds exactly one element",
      "A container that may or may not hold a value, forcing explicit null handling via isPresent(), orElse(), map()",
      "An annotation that marks method parameters as optional",
      "A keyword that makes class fields nullable"
    ],
    correctOption: 1,
    answer: "A container object that may or may not hold a value. It forces explicit handling of null cases using methods like isPresent(), orElse(), map(), and flatMap(). Introduced in Java 8 to reduce NullPointerExceptions.",
    tips: "Don't use Optional as method parameters — only as return types."
  },
  {
    id: 114, topic: "Java Core", difficulty: "easy",
    scenario: "What is method overloading vs overriding?",
    options: [
      "Overloading is in different classes; Overriding is in the same class",
      "Overloading: same name, different params, same class (compile-time). Overriding: same name and params, subclass (runtime).",
      "Overloading replaces a method; Overriding extends a method",
      "They are the same concept with different names"
    ],
    correctOption: 1,
    answer: "Overloading: same method name, different parameters, same class (compile-time polymorphism). Overriding: same method name and parameters, different class (runtime polymorphism via inheritance).",
    tips: "@Override annotation helps catch errors at compile time."
  },
  {
    id: 115, topic: "Java Core", difficulty: "hard",
    scenario: "How does Garbage Collection work in Java?",
    options: [
      "Developers must call delete() on objects when done using them",
      "The JVM automatically reclaims memory from unreachable objects using generational collection (Young Gen + Old Gen)",
      "Java doesn't have garbage collection — it uses reference counting like Python",
      "Garbage collection only runs when the JVM is restarted"
    ],
    correctOption: 1,
    answer: "The JVM automatically reclaims memory from objects that are no longer reachable. It uses generational collection: Young Gen (Eden + Survivor spaces) for short-lived objects, Old Gen for long-lived ones. Major GC algorithms include G1GC, ZGC, and Shenandoah.",
    tips: "You can suggest GC but never force it — System.gc() is only a hint."
  },

  // --- SQL & DATABASES (116-130) ---
  {
    id: 116, topic: "SQL & Databases", difficulty: "easy",
    scenario: "What is the difference between INNER JOIN and LEFT JOIN?",
    options: [
      "INNER JOIN is faster; LEFT JOIN is more accurate",
      "INNER JOIN returns only matching rows; LEFT JOIN returns all left table rows with NULLs for non-matches",
      "LEFT JOIN can only join two tables; INNER JOIN can join many",
      "There is no difference in the result set"
    ],
    correctOption: 1,
    answer: "INNER JOIN returns only matching rows from both tables. LEFT JOIN returns all rows from the left table and matching rows from the right (NULL for non-matches).",
    tips: "RIGHT JOIN is rarely used — just swap the table order and use LEFT JOIN."
  },
  {
    id: 117, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is an Index and why use one?",
    options: [
      "An index is a primary key constraint on a table",
      "A data structure (usually B-tree) that speeds up retrieval on a column, with a tradeoff of slower writes",
      "An index is a sorted copy of the entire table",
      "An index automatically partitions data across servers"
    ],
    correctOption: 1,
    answer: "An index is a data structure (usually B-tree) that speeds up data retrieval on a column. Without an index, the DB does a full table scan. The tradeoff is slower writes and extra storage.",
    tips: "Don't index every column — only columns used in WHERE, JOIN, and ORDER BY."
  },
  {
    id: 118, topic: "SQL & Databases", difficulty: "medium",
    scenario: "Explain database normalization (1NF, 2NF, 3NF).",
    options: [
      "1NF: no nulls. 2NF: no duplicates. 3NF: no foreign keys",
      "1NF: atomic values. 2NF: no partial dependencies. 3NF: no transitive dependencies",
      "1NF: one table. 2NF: two related tables. 3NF: three or more tables",
      "Normalization is about making queries faster, not about data structure"
    ],
    correctOption: 1,
    answer: "1NF: Atomic values (no repeating groups). 2NF: 1NF + no partial dependencies (all non-key columns depend on the entire primary key). 3NF: 2NF + no transitive dependencies (non-key columns don't depend on other non-key columns).",
    tips: "In practice, most systems are designed to 3NF then selectively denormalized for performance."
  },
  {
    id: 119, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What are ACID properties?",
    options: [
      "Authentication, Consistency, Integrity, Durability",
      "Atomicity (all or nothing), Consistency (valid states), Isolation (no interference), Durability (survives crashes)",
      "Availability, Consistency, Isolation, Distribution",
      "ACID is a NoSQL concept for eventually consistent databases"
    ],
    correctOption: 1,
    answer: "Atomicity (all or nothing), Consistency (valid state to valid state), Isolation (concurrent transactions don't interfere), Durability (committed data survives crashes). These guarantee reliable database transactions.",
    tips: "NoSQL databases often sacrifice some ACID for scalability (BASE model)."
  },
  {
    id: 120, topic: "SQL & Databases", difficulty: "hard",
    scenario: "What are Window Functions? Give an example.",
    options: [
      "Functions that create new database windows/connections",
      "Functions that perform calculations across related rows without collapsing them (e.g., ROW_NUMBER() OVER (PARTITION BY ...))",
      "Functions that display query results in a GUI window",
      "Functions that filter results within a time window"
    ],
    correctOption: 1,
    answer: "Window functions perform calculations across a set of rows related to the current row, without collapsing them. Example: ROW_NUMBER() OVER (PARTITION BY dept ORDER BY salary DESC) ranks employees by salary within each department.",
    tips: "Common window functions: ROW_NUMBER, RANK, DENSE_RANK, LAG, LEAD, SUM OVER."
  },
  {
    id: 121, topic: "SQL & Databases", difficulty: "easy",
    scenario: "What is a Primary Key vs Foreign Key?",
    options: [
      "Primary Key is for indexing; Foreign Key is for sorting",
      "Primary Key uniquely identifies each row (no NULLs); Foreign Key references another table's Primary Key to establish relationships",
      "A table can have multiple Primary Keys but only one Foreign Key",
      "Foreign Key must be unique; Primary Key can have duplicates"
    ],
    correctOption: 1,
    answer: "Primary Key uniquely identifies each row in a table (no NULLs, no duplicates). Foreign Key is a column that references the Primary Key of another table, establishing a relationship.",
    tips: "A table can have only one PK but multiple FKs."
  },
  {
    id: 122, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is the difference between WHERE and HAVING?",
    options: [
      "WHERE is for SELECT statements; HAVING is for INSERT statements",
      "WHERE filters rows before grouping; HAVING filters groups after GROUP BY and can use aggregate functions",
      "HAVING is faster than WHERE for all queries",
      "They are interchangeable — use either one"
    ],
    correctOption: 1,
    answer: "WHERE filters rows before grouping (works on individual rows). HAVING filters groups after GROUP BY (works on aggregated results). HAVING can use aggregate functions like COUNT, SUM.",
    tips: "WHERE is faster — always filter as early as possible."
  },
  {
    id: 123, topic: "SQL & Databases", difficulty: "hard",
    scenario: "What is a Deadlock and how do you prevent it?",
    options: [
      "A deadlock is when a query takes too long and times out",
      "Two transactions hold locks the other needs, creating circular wait. Prevent with consistent lock ordering, timeouts, short transactions",
      "A deadlock is when the database runs out of disk space",
      "Deadlocks only occur in NoSQL databases, not in SQL"
    ],
    correctOption: 1,
    answer: "A deadlock occurs when two transactions hold locks the other needs, creating a circular wait. Prevention strategies: acquire locks in a consistent order, use lock timeouts, keep transactions short, use row-level locking instead of table-level.",
    tips: "Most databases detect deadlocks and kill one transaction automatically."
  },
  {
    id: 124, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is the difference between UNION and UNION ALL?",
    options: [
      "UNION works on same tables; UNION ALL works on different tables",
      "UNION removes duplicates (slower); UNION ALL keeps all rows including duplicates (faster)",
      "UNION ALL is deprecated — always use UNION",
      "UNION combines columns; UNION ALL combines rows"
    ],
    correctOption: 1,
    answer: "UNION combines result sets and removes duplicates (slower). UNION ALL combines result sets and keeps all rows including duplicates (faster). Use UNION ALL when you know there are no duplicates.",
    tips: "UNION has an implicit DISTINCT — extra sorting overhead."
  },
  {
    id: 125, topic: "SQL & Databases", difficulty: "hard",
    scenario: "Explain the difference between Clustered and Non-Clustered Index.",
    options: [
      "Clustered is for single columns; Non-Clustered is for multiple columns",
      "Clustered determines physical data order (one per table, usually PK); Non-Clustered is a separate structure with pointers (multiple allowed)",
      "Non-Clustered is faster for all query types",
      "Clustered indexes are only available in NoSQL databases"
    ],
    correctOption: 1,
    answer: "Clustered index determines the physical order of data in the table (only one per table, usually the PK). Non-clustered index is a separate structure with pointers to data rows (multiple allowed). Clustered is faster for range queries.",
    tips: "Think of clustered as the table of contents, non-clustered as the index at the back of a book."
  },
  {
    id: 126, topic: "SQL & Databases", difficulty: "easy",
    scenario: "What is a VIEW?",
    options: [
      "A graphical interface for viewing database tables",
      "A virtual table based on a SQL query — doesn't store data, runs the query when accessed",
      "A cached copy of a table stored in memory",
      "A permission setting that controls who can see a table"
    ],
    correctOption: 1,
    answer: "A virtual table based on a SQL query. It doesn't store data itself — it runs the underlying query when accessed. Used for simplifying complex queries and restricting data access.",
    tips: "Materialized Views actually store data and need refreshing."
  },
  {
    id: 127, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is a Stored Procedure vs a Function?",
    options: [
      "They are the same thing with different names",
      "Stored Procedure can perform actions and needn't return a value; Function must return a value and generally can't modify data",
      "Functions are faster; Stored Procedures are more secure",
      "Stored Procedures are written in SQL; Functions are written in Java"
    ],
    correctOption: 1,
    answer: "Stored Procedure can perform actions (INSERT, UPDATE, DELETE) and doesn't need to return a value. Function must return a value and generally can't modify data. Functions can be used in SELECT statements.",
    tips: "Stored procedures are pre-compiled for performance."
  },
  {
    id: 128, topic: "SQL & Databases", difficulty: "hard",
    scenario: "What is database connection pooling and why is it important?",
    options: [
      "It pools multiple databases into one virtual database",
      "It maintains reusable DB connections, avoiding expensive connection creation (TCP, auth, memory). HikariCP is the Spring Boot default",
      "It distributes queries evenly across database replicas",
      "It caches query results to avoid repeated database hits"
    ],
    correctOption: 1,
    answer: "Connection pooling maintains a cache of reusable database connections. Creating a new DB connection is expensive (TCP handshake, auth, memory). Pools like HikariCP recycle connections, reducing latency and resource usage.",
    tips: "HikariCP is the default in Spring Boot — configure pool size based on: connections = (core_count * 2) + disk_count."
  },
  {
    id: 129, topic: "SQL & Databases", difficulty: "easy",
    scenario: "What is NULL in SQL?",
    options: [
      "NULL is the same as 0 or empty string",
      "NULL represents unknown/missing data; requires IS NULL for comparison; any arithmetic with NULL returns NULL",
      "NULL is a reserved keyword that deletes data",
      "NULL can be compared using = operator like any other value"
    ],
    correctOption: 1,
    answer: "NULL represents unknown or missing data. It's not the same as 0 or empty string. NULL comparisons require IS NULL / IS NOT NULL — you can't use = NULL. Any arithmetic with NULL returns NULL.",
    tips: "COALESCE(column, default) is your friend for handling NULLs."
  },
  {
    id: 130, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is a Transaction Isolation Level?",
    options: [
      "The level of encryption applied to database transactions",
      "Controls how transactions see each other's uncommitted changes — levels: READ UNCOMMITTED, READ COMMITTED, REPEATABLE READ, SERIALIZABLE",
      "The priority level assigned to concurrent transactions",
      "The number of transactions that can run simultaneously"
    ],
    correctOption: 1,
    answer: "Controls how transactions see each other's uncommitted changes. Levels (low to high): READ UNCOMMITTED (dirty reads), READ COMMITTED (default in Postgres), REPEATABLE READ (default in MySQL), SERIALIZABLE (full isolation, slowest).",
    tips: "Higher isolation = more consistency but less concurrency."
  },

  // --- GIT (131-140) ---
  {
    id: 131, topic: "Git", difficulty: "easy",
    scenario: "What is the difference between git merge and git rebase?",
    options: [
      "Merge is for local branches; Rebase is for remote branches",
      "Merge creates a merge commit preserving history; Rebase replays commits on top of the target for linear history",
      "Rebase is safer because it doesn't change commit history",
      "They produce identical results in all cases"
    ],
    correctOption: 1,
    answer: "Merge creates a merge commit preserving history as-is. Rebase replays your commits on top of the target branch, creating a linear history. Rebase rewrites commit hashes.",
    tips: "Golden rule: never rebase public/shared branches."
  },
  {
    id: 132, topic: "Git", difficulty: "medium",
    scenario: "What is git cherry-pick?",
    options: [
      "A way to select which files to include in a commit",
      "Applies a specific commit from one branch onto another without merging the entire branch",
      "A tool for resolving merge conflicts",
      "A command that picks the best merge strategy automatically"
    ],
    correctOption: 1,
    answer: "Cherry-pick applies a specific commit from one branch onto another without merging the entire branch. Useful for hotfixes — pick the fix commit from develop and apply it to main.",
    tips: "It creates a new commit with a new hash."
  },
  {
    id: 133, topic: "Git", difficulty: "easy",
    scenario: "What is the difference between git pull and git fetch?",
    options: [
      "Pull downloads code; Fetch uploads code",
      "Fetch downloads new data without merging; Pull = fetch + merge",
      "They are identical commands",
      "Fetch works on branches; Pull works on tags"
    ],
    correctOption: 1,
    answer: "git fetch downloads new data from the remote but doesn't merge it. git pull = git fetch + git merge. Fetch is safer because it lets you review changes before merging.",
    tips: "Use 'git pull --rebase' for cleaner history."
  },
  {
    id: 134, topic: "Git", difficulty: "medium",
    scenario: "What is git stash?",
    options: [
      "A command that permanently deletes uncommitted changes",
      "Temporarily saves uncommitted changes so you can switch branches; restore with stash pop or stash apply",
      "A way to hide files from git tracking",
      "A command that creates a backup branch"
    ],
    correctOption: 1,
    answer: "Stash temporarily saves uncommitted changes (both staged and unstaged) so you can switch branches cleanly. Restore with 'git stash pop' (apply + delete) or 'git stash apply' (apply + keep).",
    tips: "Use 'git stash list' to see all stashes."
  },
  {
    id: 135, topic: "Git", difficulty: "hard",
    scenario: "What is an interactive rebase (git rebase -i)?",
    options: [
      "A graphical tool for resolving merge conflicts",
      "Lets you edit, squash, reorder, or drop commits before applying them — great for cleaning up history",
      "A command that automatically resolves all conflicts",
      "A way to rebase while keeping the terminal interactive"
    ],
    correctOption: 1,
    answer: "Interactive rebase lets you edit, squash, reorder, or drop commits before applying them. Common uses: squash multiple WIP commits into one clean commit, reword commit messages, or reorder commit history.",
    tips: "Squash before merging PRs to keep main branch clean."
  },
  {
    id: 136, topic: "Git", difficulty: "easy",
    scenario: "What is a Git branch?",
    options: [
      "A copy of the entire repository",
      "A lightweight pointer to a specific commit, allowing parallel development without affecting main code",
      "A folder within the .git directory",
      "A separate Git repository linked to the main one"
    ],
    correctOption: 1,
    answer: "A branch is a lightweight pointer to a specific commit. It allows parallel development — you can work on features without affecting the main codebase. Branching in Git is fast because it's just a 41-byte file.",
    tips: "Common strategies: Git Flow, GitHub Flow, Trunk-based."
  },
  {
    id: 137, topic: "Git", difficulty: "medium",
    scenario: "What is git reset vs git revert?",
    options: [
      "Reset is for staged files; Revert is for committed files",
      "Reset moves the branch pointer backward (destructive); Revert creates a new commit that undoes a previous one (safe)",
      "Revert deletes commits; Reset only hides them",
      "They are identical — use either one"
    ],
    correctOption: 1,
    answer: "git reset moves the branch pointer backward, removing commits from history (destructive). git revert creates a new commit that undoes a previous commit (safe, preserves history). Use revert for shared branches.",
    tips: "reset --soft keeps changes staged, --mixed keeps them unstaged, --hard discards everything."
  },
  {
    id: 138, topic: "Git", difficulty: "medium",
    scenario: "What is a merge conflict and how do you resolve it?",
    options: [
      "A conflict between Git and your IDE — restart the IDE to fix",
      "When the same lines are modified differently in both branches — resolve by editing the conflicted file and choosing correct changes",
      "A conflict that occurs when two people push at the same time",
      "An error that requires deleting and re-cloning the repository"
    ],
    correctOption: 1,
    answer: "A merge conflict occurs when Git can't automatically merge changes because the same lines were modified differently in both branches. Resolve by: opening the conflicted file, choosing the correct changes between <<<< and >>>> markers, then staging and committing.",
    tips: "Use 'git mergetool' or VS Code's built-in merge editor."
  },
  {
    id: 139, topic: "Git", difficulty: "hard",
    scenario: "What is git reflog and when would you use it?",
    options: [
      "A command that shows the last 10 commit messages",
      "Records every HEAD and branch tip movement — your safety net to recover 'lost' commits after reset or rebase",
      "A logging tool that tracks who accessed the repository",
      "A command that reformats the git log output"
    ],
    correctOption: 1,
    answer: "Reflog records every movement of HEAD and branch tips — even commits removed by reset or rebase. It's your safety net to recover 'lost' commits. Use 'git reflog' to find the hash, then 'git checkout' or 'git reset' to restore.",
    tips: "Reflog entries expire after 90 days by default."
  },
  {
    id: 140, topic: "Git", difficulty: "medium",
    scenario: "What is a .gitignore file?",
    options: [
      "A file that lists branches to ignore during merges",
      "A file that tells Git which files/directories to not track (e.g., node_modules/, .env, build/)",
      "A system file that Git creates automatically",
      "A config file that disables Git for certain directories"
    ],
    correctOption: 1,
    answer: "A file that tells Git which files/directories to ignore and not track. Common entries: node_modules/, .env, build/, *.log, .DS_Store. Patterns support wildcards and negation (!).",
    tips: "Use gitignore.io to generate templates for your stack."
  },

  // --- REST API DESIGN (141-150) ---
  {
    id: 141, topic: "REST API Design", difficulty: "easy",
    scenario: "What are the main HTTP methods and their purposes?",
    options: [
      "GET (create), POST (read), PUT (delete), DELETE (update)",
      "GET (read), POST (create), PUT (full update), PATCH (partial update), DELETE (remove)",
      "All HTTP methods do the same thing — the URL determines the action",
      "GET and POST are the only methods; PUT and DELETE are optional extensions"
    ],
    correctOption: 1,
    answer: "GET (read), POST (create), PUT (full update/replace), PATCH (partial update), DELETE (remove). GET and DELETE have no body. PUT is idempotent; POST is not.",
    tips: "Use nouns for resources (/users), not verbs (/getUsers)."
  },
  {
    id: 142, topic: "REST API Design", difficulty: "medium",
    scenario: "What is idempotency and which HTTP methods are idempotent?",
    options: [
      "Idempotency means a request can only be made once",
      "An idempotent operation produces the same result when called multiple times. GET, PUT, DELETE are idempotent; POST is not",
      "All HTTP methods are idempotent by default",
      "Idempotency applies only to database operations, not HTTP"
    ],
    correctOption: 1,
    answer: "An idempotent operation produces the same result when called multiple times. GET, PUT, DELETE are idempotent. POST is NOT idempotent (calling POST /orders twice creates two orders).",
    tips: "Idempotency is crucial for retry logic and reliability."
  },
  {
    id: 143, topic: "REST API Design", difficulty: "medium",
    scenario: "What are the most important HTTP status codes?",
    options: [
      "100, 200, 300, 400, 500 — one from each category is enough",
      "200 OK, 201 Created, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 500 Internal Server Error",
      "APIs should always return 200 with a status field in the JSON body",
      "Status codes are optional — the response body is what matters"
    ],
    correctOption: 1,
    answer: "200 OK, 201 Created, 204 No Content, 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests, 500 Internal Server Error.",
    tips: "Never return 200 with an error message in the body — use proper status codes."
  },
  {
    id: 144, topic: "REST API Design", difficulty: "hard",
    scenario: "How do you version a REST API?",
    options: [
      "Never version APIs — just update them in place",
      "Three approaches: URL path (/api/v1/users — most common), Query param (?version=1), or HTTP header (Accept: vnd.api.v1+json)",
      "Use different domain names for each version (v1.api.com, v2.api.com)",
      "Version by changing the HTTP method for each version"
    ],
    correctOption: 1,
    answer: "Three main approaches: URL path (/api/v1/users — most common), Query parameter (/api/users?version=1), or HTTP header (Accept: application/vnd.api.v1+json). URL versioning is simplest and most visible.",
    tips: "Only version when you make breaking changes."
  },
  {
    id: 145, topic: "REST API Design", difficulty: "medium",
    scenario: "What is HATEOAS?",
    options: [
      "A security protocol for API authentication",
      "Hypermedia As The Engine Of Application State — API responses include links to related actions so clients navigate dynamically",
      "A data format that replaces JSON in REST APIs",
      "A caching strategy for hypermedia content"
    ],
    correctOption: 1,
    answer: "Hypermedia As The Engine Of Application State. The API response includes links to related actions/resources, so clients can navigate the API dynamically without hardcoding URLs.",
    tips: "It's the highest maturity level of REST (Richardson Maturity Model Level 3)."
  },
  {
    id: 146, topic: "REST API Design", difficulty: "easy",
    scenario: "What is the difference between authentication and authorization?",
    options: [
      "They are the same thing — both verify user identity",
      "Authentication verifies identity (who are you?); Authorization verifies permissions (what can you do?)",
      "Authentication is for APIs; Authorization is for web pages",
      "Authorization comes before Authentication in the request flow"
    ],
    correctOption: 1,
    answer: "Authentication verifies identity (who are you?). Authorization verifies permissions (what can you do?). Authentication comes first. Example: logging in is authentication; accessing admin panel is authorization.",
    tips: "401 = not authenticated, 403 = authenticated but not authorized."
  },
  {
    id: 147, topic: "REST API Design", difficulty: "medium",
    scenario: "What is pagination in REST APIs?",
    options: [
      "Splitting API documentation into multiple pages",
      "Breaking large result sets into pages — offset-based (?page=2&size=20) or cursor-based (?cursor=abc&size=20)",
      "Paginating error messages for readability",
      "A technique for caching API responses page by page"
    ],
    correctOption: 1,
    answer: "Breaking large result sets into pages. Common approaches: offset-based (?page=2&size=20 — simple but slow for large offsets), cursor-based (?cursor=abc123&size=20 — faster, used by social media APIs).",
    tips: "Always paginate list endpoints — never return unbounded data."
  },
  {
    id: 148, topic: "REST API Design", difficulty: "hard",
    scenario: "What is the difference between REST and GraphQL?",
    options: [
      "REST is outdated; GraphQL is the replacement",
      "REST uses multiple endpoints with fixed responses; GraphQL uses one endpoint where clients specify exact data needed",
      "GraphQL is for graphs/databases; REST is for web APIs",
      "REST is faster in all cases; GraphQL only adds complexity"
    ],
    correctOption: 1,
    answer: "REST uses multiple endpoints (one per resource) with fixed response structures. GraphQL uses a single endpoint where clients specify exactly what data they need. REST can over-fetch/under-fetch; GraphQL solves this but adds query complexity.",
    tips: "REST is simpler for CRUD; GraphQL shines when clients have diverse data needs."
  },
  {
    id: 149, topic: "REST API Design", difficulty: "easy",
    scenario: "What is CORS?",
    options: [
      "A data serialization format for REST APIs",
      "Cross-Origin Resource Sharing — lets servers indicate which origins can access their resources; browsers block cross-origin requests without it",
      "A compression algorithm for reducing API response size",
      "A REST API design pattern for handling concurrent requests"
    ],
    correctOption: 1,
    answer: "Cross-Origin Resource Sharing. A security mechanism that allows a server to indicate which origins (domains) can access its resources. Without CORS headers, browsers block cross-origin requests.",
    tips: "Set Access-Control-Allow-Origin carefully — don't use * in production."
  },
  {
    id: 150, topic: "REST API Design", difficulty: "medium",
    scenario: "What is rate limiting and how do you implement it?",
    options: [
      "Limiting the size of API request bodies",
      "Limiting API requests per client per time window. Use Token Bucket or Sliding Window; return 429 with Retry-After when exceeded",
      "Limiting the number of API endpoints in your application",
      "Limiting the rate at which servers process background jobs"
    ],
    correctOption: 1,
    answer: "Limiting the number of API requests per client per time window. Implementation: Token Bucket or Sliding Window algorithms. Return 429 Too Many Requests with Retry-After header when limit is exceeded.",
    tips: "Use API Gateway (Kong, AWS API Gateway) for centralized rate limiting."
  },

  // --- AWS / CLOUD (151-160) ---
  {
    id: 151, topic: "AWS / Cloud", difficulty: "easy",
    scenario: "What is EC2?",
    options: [
      "A managed database service by AWS",
      "Elastic Compute Cloud — virtual servers in the cloud with configurable CPU, memory, and storage",
      "A container orchestration service similar to Kubernetes",
      "A CDN service for caching static content globally"
    ],
    correctOption: 1,
    answer: "Elastic Compute Cloud — virtual servers in the cloud. You can launch instances with different CPU, memory, and storage configs. It's the backbone of AWS computing.",
    tips: "Instance types: t3 (general), c5 (compute), r5 (memory), p3 (GPU)."
  },
  {
    id: 152, topic: "AWS / Cloud", difficulty: "easy",
    scenario: "What is S3?",
    options: [
      "A relational database service",
      "Simple Storage Service — object storage with unlimited scaling and 11 nines of durability",
      "A server provisioning service for EC2 instances",
      "A secret management service for storing credentials"
    ],
    correctOption: 1,
    answer: "Simple Storage Service — object storage with unlimited scaling. Objects are stored in Buckets. It provides 99.999999999% (11 nines) durability. Used for static files, backups, data lakes.",
    tips: "Storage classes: Standard, Infrequent Access, Glacier for cost optimization."
  },
  {
    id: 153, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is AWS Lambda?",
    options: [
      "A virtual machine service for long-running applications",
      "Serverless compute that runs code in response to events without provisioning servers — pay per ms of compute",
      "A load balancer for distributing traffic across EC2 instances",
      "A CI/CD pipeline service for deploying applications"
    ],
    correctOption: 1,
    answer: "A serverless compute service that runs your code in response to events (HTTP requests, S3 uploads, SQS messages) without provisioning servers. You pay only for compute time consumed (per ms).",
    tips: "Cold start is the main drawback — mitigate with Provisioned Concurrency."
  },
  {
    id: 154, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is RDS vs DynamoDB?",
    options: [
      "RDS is for small data; DynamoDB is for big data",
      "RDS is managed relational (SQL, ACID); DynamoDB is managed NoSQL (key-value, unlimited scale, ms latency)",
      "DynamoDB is a newer version of RDS",
      "RDS is serverless; DynamoDB requires provisioning"
    ],
    correctOption: 1,
    answer: "RDS is managed relational databases (MySQL, Postgres, etc.) — structured data, SQL, ACID. DynamoDB is a managed NoSQL key-value/document store — unlimited scale, single-digit ms latency, flexible schema.",
    tips: "RDS for complex queries; DynamoDB for high-throughput, simple access patterns."
  },
  {
    id: 155, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is IAM?",
    options: [
      "An infrastructure monitoring service",
      "Identity and Access Management — controls who can do what in AWS using Users, Groups, Roles, and Policies",
      "An automated infrastructure deployment service",
      "A machine learning service for identity verification"
    ],
    correctOption: 1,
    answer: "Identity and Access Management — controls who (authentication) can do what (authorization) in your AWS account. Uses Users, Groups, Roles, and Policies. Follow the principle of least privilege.",
    tips: "Never use root account for daily tasks — create IAM users."
  },
  {
    id: 156, topic: "AWS / Cloud", difficulty: "hard",
    scenario: "What is a VPC?",
    options: [
      "A version control platform for cloud infrastructure",
      "Virtual Private Cloud — your own isolated network within AWS with IP ranges, subnets, route tables, and gateways",
      "A virtual processor cluster for high-performance computing",
      "A VPN connection between on-premise and AWS"
    ],
    correctOption: 1,
    answer: "Virtual Private Cloud — your own isolated network within AWS. You define IP ranges (CIDR blocks), create subnets (public/private), configure route tables, and set up internet/NAT gateways. It's the networking foundation.",
    tips: "Public subnet = has route to Internet Gateway; Private subnet = uses NAT Gateway for outbound."
  },
  {
    id: 157, topic: "AWS / Cloud", difficulty: "easy",
    scenario: "What is CloudFront?",
    options: [
      "A cloud-based IDE for web development",
      "AWS's CDN — caches content at edge locations worldwide for lower latency",
      "A frontend framework for building AWS console UIs",
      "A cloud migration tool for moving apps to AWS"
    ],
    correctOption: 1,
    answer: "AWS's Content Delivery Network (CDN). It caches content at edge locations worldwide, reducing latency for users. Works with S3, EC2, and ALB as origins.",
    tips: "Use for static assets, API acceleration, and DDoS protection."
  },
  {
    id: 158, topic: "AWS / Cloud", difficulty: "hard",
    scenario: "What is the difference between SQS and SNS?",
    options: [
      "SQS is for emails; SNS is for SMS messages",
      "SQS is a message queue (point-to-point, pull-based); SNS is pub/sub (one-to-many, push-based)",
      "SNS is newer and replaces SQS",
      "SQS is for large messages; SNS is for small messages"
    ],
    correctOption: 1,
    answer: "SQS (Simple Queue Service) is a message queue — point-to-point, pull-based, messages persist until consumed. SNS (Simple Notification Service) is pub/sub — one-to-many, push-based, broadcasts to multiple subscribers.",
    tips: "Common pattern: SNS fans out to multiple SQS queues."
  },
  {
    id: 159, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is an Auto Scaling Group?",
    options: [
      "A group of databases that scale storage automatically",
      "Automatically adjusts EC2 instance count based on demand with min/max/desired capacity and scaling policies",
      "A feature that scales Lambda function memory automatically",
      "A Kubernetes cluster managed by AWS"
    ],
    correctOption: 1,
    answer: "Automatically adjusts the number of EC2 instances based on demand. You define min/max/desired capacity and scaling policies (CPU > 70% = add instance). Ensures high availability and cost optimization.",
    tips: "Combine with ALB for automatic traffic distribution to new instances."
  },
  {
    id: 160, topic: "AWS / Cloud", difficulty: "hard",
    scenario: "What is Infrastructure as Code (IaC)?",
    options: [
      "Writing application code that runs on cloud infrastructure",
      "Managing infrastructure through code/config files (Terraform, CloudFormation) for version control, reproducibility, and automation",
      "A coding standard required for cloud-native applications",
      "Using the AWS console CLI instead of the web UI"
    ],
    correctOption: 1,
    answer: "Managing infrastructure through code/config files instead of manual console clicks. AWS CloudFormation and Terraform are popular tools. Benefits: version control, reproducibility, automation, and consistency across environments.",
    tips: "Terraform is cloud-agnostic; CloudFormation is AWS-only but deeply integrated."
  },

  // --- SPRING BOOT (161-165) ---
  {
    id: 161, topic: "Spring Boot", difficulty: "hard",
    scenario: "What is the Saga pattern in microservices?",
    options: [
      "A logging pattern for tracking request flows across services",
      "A sequence of local transactions where each service publishes events to trigger the next step; compensating transactions handle failures",
      "A design pattern for breaking a monolith into microservices",
      "A security pattern for service-to-service authentication"
    ],
    correctOption: 1,
    answer: "The Saga pattern manages distributed transactions across microservices. Each service executes a local transaction and publishes an event. If any step fails, compensating (rollback) transactions are executed in reverse order. Two styles: Choreography (event-driven) and Orchestration (central coordinator).",
    tips: "Choreography is simpler; Orchestration gives better visibility and control."
  },
  {
    id: 162, topic: "Spring Boot", difficulty: "medium",
    scenario: "What is the difference between @RequestBody and @RequestParam?",
    options: [
      "@RequestBody reads URL path variables; @RequestParam reads the request body",
      "@RequestBody maps the HTTP request body (usually JSON) to a Java object; @RequestParam extracts query parameters from the URL",
      "They are interchangeable for POST requests",
      "@RequestBody is for GET requests; @RequestParam is for POST requests"
    ],
    correctOption: 1,
    answer: "@RequestBody deserializes the entire HTTP request body (typically JSON) into a Java object using Jackson. @RequestParam extracts individual query string or form parameters from the URL (e.g., ?name=John). Use @RequestBody for POST/PUT bodies, @RequestParam for query filters.",
    tips: "Use @PathVariable for URL path segments like /users/{id}."
  },
  {
    id: 163, topic: "Spring Boot", difficulty: "hard",
    scenario: "What is Spring WebFlux?",
    options: [
      "A web framework for building server-side rendered pages",
      "A reactive, non-blocking web framework built on Project Reactor for handling high-concurrency with fewer threads",
      "A JavaScript bundler integrated with Spring Boot",
      "A WebSocket library for real-time communication"
    ],
    correctOption: 1,
    answer: "Spring WebFlux is the reactive web framework in Spring. It uses Project Reactor (Mono/Flux) for non-blocking, asynchronous request handling. Instead of one-thread-per-request (like Spring MVC), it uses an event loop model, ideal for high-concurrency, I/O-heavy applications.",
    tips: "Use WebFlux when you need to handle thousands of concurrent connections with minimal threads."
  },
  {
    id: 164, topic: "Spring Boot", difficulty: "medium",
    scenario: "What is the difference between @Component, @Service, @Repository, and @Controller?",
    options: [
      "They create beans with different scopes — singleton, prototype, request, session respectively",
      "All are stereotypes of @Component; @Service = business logic, @Repository = data access (adds exception translation), @Controller = web layer",
      "@Repository is for NoSQL; @Service is for SQL databases",
      "Only @Component creates a Spring bean; the others are just markers"
    ],
    correctOption: 1,
    answer: "All four are specializations of @Component and register a class as a Spring bean. @Service indicates business logic. @Repository indicates data access and adds automatic exception translation (SQL exceptions to Spring's DataAccessException). @Controller marks a web controller.",
    tips: "Use the specific annotation for better readability and AOP targeting."
  },
  {
    id: 165, topic: "Spring Boot", difficulty: "hard",
    scenario: "What is the CQRS pattern?",
    options: [
      "A caching strategy for read-heavy applications",
      "Command Query Responsibility Segregation — separate models for reading (queries) and writing (commands) data",
      "A circuit-breaker pattern for query resilience",
      "A database partitioning strategy for concurrent requests"
    ],
    correctOption: 1,
    answer: "Command Query Responsibility Segregation separates the read model (optimized for queries) from the write model (optimized for commands/mutations). This allows independent scaling, different data stores, and optimized schemas for each side. Often paired with Event Sourcing.",
    tips: "Adds complexity — only use when read and write patterns differ significantly."
  },

  // --- DOCKER (166-170) ---
  {
    id: 166, topic: "Docker", difficulty: "hard",
    scenario: "What is the difference between CMD and ENTRYPOINT in a Dockerfile?",
    options: [
      "CMD runs before ENTRYPOINT in the container lifecycle",
      "ENTRYPOINT sets the main executable (hard to override); CMD provides default arguments that can be easily overridden at runtime",
      "CMD is for Linux containers; ENTRYPOINT is for Windows containers",
      "There is no difference — use either one"
    ],
    correctOption: 1,
    answer: "ENTRYPOINT defines the main executable command that always runs. CMD provides default arguments to ENTRYPOINT that can be overridden via 'docker run' arguments. If used alone, CMD is the full default command. Best practice: ENTRYPOINT for the executable, CMD for default flags.",
    tips: "Example: ENTRYPOINT [\"java\", \"-jar\"] CMD [\"app.jar\"] — override with docker run image other.jar"
  },
  {
    id: 167, topic: "Docker", difficulty: "medium",
    scenario: "What is a Docker health check?",
    options: [
      "A manual check performed by the developer after deployment",
      "A Dockerfile instruction (HEALTHCHECK) that periodically tests if a container is still working correctly",
      "A scan that checks Docker images for security vulnerabilities",
      "A network connectivity test between containers"
    ],
    correctOption: 1,
    answer: "HEALTHCHECK is a Dockerfile instruction that defines a command Docker runs periodically to check if the container is healthy. If the check fails repeatedly, the container is marked 'unhealthy'. Orchestrators like Docker Swarm and Kubernetes use this to restart unhealthy containers.",
    tips: "Example: HEALTHCHECK CMD curl -f http://localhost:8080/health || exit 1"
  },
  {
    id: 168, topic: "Docker", difficulty: "medium",
    scenario: "What is the difference between 'docker stop' and 'docker kill'?",
    options: [
      "docker stop removes the container; docker kill just pauses it",
      "docker stop sends SIGTERM (graceful shutdown); docker kill sends SIGKILL (immediate termination)",
      "docker kill works on running containers; docker stop works on stopped containers",
      "They are identical commands"
    ],
    correctOption: 1,
    answer: "'docker stop' sends SIGTERM to the main process, allowing graceful shutdown (with a default 10s timeout before SIGKILL). 'docker kill' sends SIGKILL immediately, forcing instant termination with no cleanup.",
    tips: "Always prefer 'docker stop' in production to allow graceful shutdown."
  },
  {
    id: 169, topic: "Docker", difficulty: "hard",
    scenario: "What is Docker BuildKit?",
    options: [
      "A GUI tool for building Dockerfiles visually",
      "A next-gen build engine with parallel build stages, better caching, build secrets support, and smaller build context",
      "A CI/CD integration for automated Docker builds",
      "A tool for converting Docker Compose files to Dockerfiles"
    ],
    correctOption: 1,
    answer: "BuildKit is Docker's improved build engine (default since Docker 23). It features parallel execution of independent build stages, improved caching, build secrets (--secret), SSH agent forwarding, and faster builds with smaller contexts.",
    tips: "Enable with DOCKER_BUILDKIT=1 on older Docker versions."
  },
  {
    id: 170, topic: "Docker", difficulty: "easy",
    scenario: "What is 'docker exec'?",
    options: [
      "A command to execute a Dockerfile and build an image",
      "A command to run a new command inside an already running container",
      "A command to execute all stopped containers",
      "A command to export a container as a tar file"
    ],
    correctOption: 1,
    answer: "'docker exec' runs a command inside a running container. It's commonly used for debugging — for example, 'docker exec -it container_name bash' gives you a shell inside the container.",
    tips: "Use -it for interactive mode (shell access)."
  },

  // --- KUBERNETES (171-175) ---
  {
    id: 171, topic: "Kubernetes", difficulty: "hard",
    scenario: "What is a DaemonSet?",
    options: [
      "A set of background processes running on the control plane",
      "Ensures a copy of a specific Pod runs on every (or selected) node in the cluster",
      "A daemon that monitors Pod health across the cluster",
      "A scheduling policy for prioritizing certain Pods"
    ],
    correctOption: 1,
    answer: "A DaemonSet ensures that a copy of a Pod runs on every node (or selected nodes) in the cluster. When new nodes are added, the DaemonSet automatically adds Pods to them. Common uses: log collectors (Fluentd), monitoring agents (Prometheus node-exporter), network plugins.",
    tips: "DaemonSets ignore normal scheduling rules — they run everywhere."
  },
  {
    id: 172, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a Job vs a CronJob in Kubernetes?",
    options: [
      "Job is for long-running services; CronJob is for short tasks",
      "Job runs a task to completion (one-time); CronJob runs Jobs on a recurring schedule (like Linux cron)",
      "CronJob is deprecated in favor of Job with schedule labels",
      "Job runs inside a Pod; CronJob runs outside the cluster"
    ],
    correctOption: 1,
    answer: "A Job creates one or more Pods and ensures they run to completion (e.g., batch processing, database migration). A CronJob creates Jobs on a recurring schedule using cron syntax (e.g., '*/5 * * * *' for every 5 minutes).",
    tips: "Set backoffLimit on Jobs to control retry behavior."
  },
  {
    id: 173, topic: "Kubernetes", difficulty: "hard",
    scenario: "What is a Network Policy?",
    options: [
      "A load balancing configuration for Services",
      "Rules that control which Pods can communicate with each other and with external endpoints",
      "A DNS configuration for the cluster",
      "A TLS certificate management policy"
    ],
    correctOption: 1,
    answer: "Network Policies are Kubernetes resources that control traffic flow at the IP/port level between Pods. By default, all Pods can communicate freely. Network Policies let you restrict ingress (incoming) and egress (outgoing) traffic using label selectors.",
    tips: "You need a CNI plugin that supports Network Policies (Calico, Cilium)."
  },
  {
    id: 174, topic: "Kubernetes", difficulty: "medium",
    scenario: "What is a PersistentVolume (PV) and PersistentVolumeClaim (PVC)?",
    options: [
      "PV is a temporary volume; PVC makes it permanent",
      "PV is a cluster-level storage resource; PVC is a user's request to use that storage — decouples storage from Pods",
      "PV stores data in etcd; PVC stores data on disk",
      "They are the same thing with different names"
    ],
    correctOption: 1,
    answer: "PersistentVolume (PV) is a piece of storage provisioned by an admin (or dynamically via StorageClass). PersistentVolumeClaim (PVC) is a request by a user for storage. PVCs bind to PVs, decoupling storage provisioning from consumption.",
    tips: "Use StorageClass for dynamic provisioning — no manual PV creation needed."
  },
  {
    id: 175, topic: "Kubernetes", difficulty: "hard",
    scenario: "What is a Service Mesh (e.g., Istio)?",
    options: [
      "A networking cable layout for data centers",
      "A dedicated infrastructure layer for managing service-to-service communication with traffic management, observability, and security (mTLS)",
      "A tool for meshing multiple Kubernetes clusters together",
      "A DNS service for resolving Pod names"
    ],
    correctOption: 1,
    answer: "A Service Mesh is a dedicated infrastructure layer (usually sidecar proxies) that handles service-to-service communication. It provides: traffic management (routing, retries, circuit breaking), observability (metrics, tracing, logging), and security (mTLS between services). Istio and Linkerd are popular.",
    tips: "Adds operational complexity — consider if your microservice count justifies it."
  },

  // --- SYSTEM DESIGN (176-180) ---
  {
    id: 176, topic: "System Design", difficulty: "hard",
    scenario: "What is Event Sourcing?",
    options: [
      "A logging pattern for tracking user events in analytics",
      "Storing the state of an entity as a sequence of immutable events rather than just the current state",
      "An event-driven architecture where services communicate via HTTP",
      "A technique for sourcing events from external APIs"
    ],
    correctOption: 1,
    answer: "Event Sourcing stores every state change as an immutable event in an append-only log. Instead of storing current state, you replay events to reconstruct state. Benefits: complete audit trail, temporal queries, easy event replay. Often paired with CQRS.",
    tips: "Example: bank account stores each debit/credit event, not just the balance."
  },
  {
    id: 177, topic: "System Design", difficulty: "hard",
    scenario: "What is Consistent Hashing?",
    options: [
      "A hashing algorithm that always produces the same output for the same input",
      "A technique for distributing data across nodes so that adding/removing a node only remaps a small fraction of keys",
      "A way to ensure all database replicas have consistent data",
      "A cryptographic hash function used for password storage"
    ],
    correctOption: 1,
    answer: "Consistent hashing maps both data keys and server nodes onto a virtual ring. When a node is added or removed, only the keys in its immediate neighborhood are remapped (K/N keys on average vs ALL keys in traditional hashing). Used in distributed caches (Memcached), databases (DynamoDB, Cassandra), and CDNs.",
    tips: "Virtual nodes help balance load — each physical node maps to multiple ring positions."
  },
  {
    id: 178, topic: "System Design", difficulty: "medium",
    scenario: "What is a Write-Ahead Log (WAL)?",
    options: [
      "A log file that records all write operations after they complete",
      "A durability technique where changes are written to a log before being applied to the database, enabling crash recovery",
      "A queue that buffers write operations during peak load",
      "A write-only API endpoint pattern for event ingestion"
    ],
    correctOption: 1,
    answer: "A Write-Ahead Log records every change to a persistent log before applying it to the actual data store. If the system crashes mid-write, the WAL can be replayed to recover. Used by PostgreSQL, MySQL (redo log), Kafka, and most databases.",
    tips: "WAL is the foundation of crash recovery and replication in databases."
  },
  {
    id: 179, topic: "System Design", difficulty: "medium",
    scenario: "What is the Strangler Fig pattern?",
    options: [
      "A security pattern that strangles unauthorized requests",
      "An incremental migration pattern that gradually replaces a monolith by routing features to new microservices one by one",
      "A performance pattern that chokes low-priority requests",
      "A deployment pattern that slowly scales down old versions"
    ],
    correctOption: 1,
    answer: "The Strangler Fig pattern incrementally migrates a legacy monolith to microservices. A facade/proxy routes requests — initially all go to the monolith. Over time, individual features are extracted into new services and the proxy routes their traffic there, until the monolith is fully replaced.",
    tips: "Named after the strangler fig tree that grows around and eventually replaces its host."
  },
  {
    id: 180, topic: "System Design", difficulty: "hard",
    scenario: "What is a Bloom Filter?",
    options: [
      "A UI component for filtering search results",
      "A probabilistic data structure that tests set membership — can say 'definitely not in set' or 'probably in set' with no false negatives",
      "A database index optimized for range queries",
      "A network filter that blocks malicious traffic"
    ],
    correctOption: 1,
    answer: "A Bloom Filter is a space-efficient probabilistic data structure that tests whether an element is in a set. It can return 'definitely not in set' (no false negatives) or 'probably in set' (possible false positives). Used to avoid expensive lookups — e.g., checking if a username exists before querying the DB.",
    tips: "Used by Chrome (safe browsing), Cassandra (SSTable lookups), and CDNs."
  },

  // --- REACT JS (181-190) ---
  {
    id: 181, topic: "React JS", difficulty: "medium",
    scenario: "What is useMemo and when should you use it?",
    options: [
      "A hook for memoizing entire components to prevent re-renders",
      "A hook that caches the result of an expensive computation and only recalculates when dependencies change",
      "A hook for storing data in browser memory permanently",
      "A hook that replaces useEffect for data fetching"
    ],
    correctOption: 1,
    answer: "useMemo caches (memoizes) the result of a computation and only recalculates when its dependency array changes. Use it for expensive calculations that you don't want to run on every render — like filtering/sorting large lists.",
    tips: "Don't overuse it — premature optimization adds complexity. Profile first."
  },
  {
    id: 182, topic: "React JS", difficulty: "medium",
    scenario: "What is useCallback and how does it differ from useMemo?",
    options: [
      "useCallback caches a function reference; useMemo caches a computed value. Both prevent unnecessary recalculations on re-renders",
      "useCallback is for async functions; useMemo is for sync functions",
      "They are identical — use either one",
      "useCallback replaces event handlers; useMemo replaces state"
    ],
    correctOption: 0,
    answer: "useCallback returns a memoized function reference — the same function instance across renders unless dependencies change. useMemo returns a memoized value. useCallback(fn, deps) is equivalent to useMemo(() => fn, deps). Use useCallback when passing callbacks to optimized child components.",
    tips: "Useful with React.memo — prevents child re-renders caused by new function references."
  },
  {
    id: 183, topic: "React JS", difficulty: "hard",
    scenario: "What is React.memo and when should you use it?",
    options: [
      "A hook for memoizing state values",
      "A higher-order component that skips re-rendering a component if its props haven't changed (shallow comparison)",
      "A tool for memorizing component tree structure",
      "A debugging tool that logs component renders"
    ],
    correctOption: 1,
    answer: "React.memo is a higher-order component that wraps a function component and performs a shallow comparison of props. If props haven't changed, React skips re-rendering that component. Useful for components that render the same result given the same props.",
    tips: "Only helps when re-rendering is expensive. Pair with useCallback for function props."
  },
  {
    id: 184, topic: "React JS", difficulty: "hard",
    scenario: "What is useRef and how does it differ from useState?",
    options: [
      "useRef is for DOM elements only; useState is for data",
      "useRef holds a mutable value that persists across renders WITHOUT causing re-renders; useState triggers re-renders on update",
      "useRef is the old API; useState replaced it in React 18",
      "They are the same — both store state and trigger re-renders"
    ],
    correctOption: 1,
    answer: "useRef returns a mutable ref object (.current) that persists across renders. Updating ref.current does NOT cause a re-render (unlike useState). Primary uses: accessing DOM elements directly, storing mutable values (timers, previous values) without triggering renders.",
    tips: "Common pattern: useRef for interval/timeout IDs so cleanup works correctly."
  },
  {
    id: 185, topic: "React JS", difficulty: "medium",
    scenario: "What is useReducer and when should you use it over useState?",
    options: [
      "useReducer is for reducing bundle size by lazy-loading components",
      "useReducer manages complex state logic via a reducer function (like Redux) — better than useState when state transitions depend on previous state or involve multiple sub-values",
      "useReducer is the same as useState but faster",
      "useReducer is only for global state management"
    ],
    correctOption: 1,
    answer: "useReducer is an alternative to useState for complex state logic. It accepts a reducer function (state, action) => newState and returns [state, dispatch]. Use it when: state has multiple sub-values, next state depends on previous state, or state transitions are complex.",
    tips: "If your useState calls are getting tangled, it's time to switch to useReducer."
  },
  {
    id: 186, topic: "React JS", difficulty: "hard",
    scenario: "What is React Suspense?",
    options: [
      "A feature that pauses JavaScript execution during rendering",
      "A component that lets you declaratively wait for async operations (code splitting, data fetching) and show a fallback UI while loading",
      "A debugging mode that suspends component updates",
      "A security feature that suspends untrusted components"
    ],
    correctOption: 1,
    answer: "Suspense lets you declare a loading state declaratively. Wrap a component in <Suspense fallback={<Spinner />}> — if the child throws a Promise (via lazy loading or a Suspense-enabled data fetcher), React shows the fallback until it resolves. Used with React.lazy() for code splitting.",
    tips: "React 18+ supports Suspense for data fetching via use() hook and server components."
  },
  {
    id: 187, topic: "React JS", difficulty: "easy",
    scenario: "What is React.lazy() and code splitting?",
    options: [
      "A way to make components load slowly for animation effects",
      "Dynamic import that splits components into separate bundles, loaded on demand to reduce initial bundle size",
      "A technique for lazy-loading images in React",
      "A method to delay component initialization for performance"
    ],
    correctOption: 1,
    answer: "React.lazy() lets you render a dynamically imported component. It splits the code into separate chunks that are loaded on demand (when the component is first rendered). This reduces the initial JavaScript bundle size. Used with Suspense for loading states.",
    tips: "Route-based code splitting is the easiest win — lazy-load each route."
  },
  {
    id: 188, topic: "React JS", difficulty: "medium",
    scenario: "What is an Error Boundary?",
    options: [
      "A try-catch block inside JSX for handling render errors",
      "A class component that catches JavaScript errors in its child tree and displays a fallback UI instead of crashing the whole app",
      "A network error handler for failed API calls",
      "A validation boundary that prevents invalid props"
    ],
    correctOption: 1,
    answer: "An Error Boundary is a class component that implements componentDidCatch() and getDerivedStateFromError(). It catches JavaScript errors anywhere in its child component tree and renders a fallback UI. Without it, a single error crashes the entire React app.",
    tips: "Error Boundaries don't catch errors in event handlers, async code, or SSR."
  },
  {
    id: 189, topic: "React JS", difficulty: "hard",
    scenario: "What is Server-Side Rendering (SSR) vs Client-Side Rendering (CSR)?",
    options: [
      "SSR renders on mobile; CSR renders on desktop",
      "SSR generates HTML on the server for faster initial load and SEO; CSR renders everything in the browser via JavaScript",
      "SSR is slower but more secure; CSR is faster but less secure",
      "SSR uses React; CSR uses vanilla JavaScript"
    ],
    correctOption: 1,
    answer: "CSR: the browser downloads a minimal HTML file, then JavaScript renders the UI — results in a blank page until JS loads. SSR: the server generates the full HTML for each request — faster First Contentful Paint, better SEO, but higher server load. Next.js supports both + SSG (Static Site Generation).",
    tips: "SSR + hydration: server sends HTML, then React 'hydrates' it to make it interactive."
  },
  {
    id: 190, topic: "React JS", difficulty: "medium",
    scenario: "What is the difference between controlled and uncontrolled components?",
    options: [
      "Controlled components use classes; Uncontrolled components use functions",
      "Controlled: form data driven by React state (value + onChange). Uncontrolled: form data handled by the DOM itself (ref to access values)",
      "Controlled renders faster; Uncontrolled is more flexible",
      "They produce different HTML output"
    ],
    correctOption: 1,
    answer: "Controlled components have their form values managed by React state — the input's value is set by state and updated via onChange handlers. Uncontrolled components let the DOM manage the form data — you use refs to read values when needed. Controlled gives more control; uncontrolled is simpler for basic forms.",
    tips: "React recommends controlled components in most cases."
  },

  // --- JAVA CORE (191-200) ---
  {
    id: 191, topic: "Java Core", difficulty: "medium",
    scenario: "What is the difference between String, StringBuilder, and StringBuffer?",
    options: [
      "String is for text; StringBuilder and StringBuffer are for numbers",
      "String is immutable; StringBuilder is mutable and not thread-safe (fast); StringBuffer is mutable and thread-safe (slower due to synchronization)",
      "StringBuilder is immutable; String and StringBuffer are mutable",
      "They are identical — use any of them interchangeably"
    ],
    correctOption: 1,
    answer: "String is immutable — every modification creates a new object. StringBuilder is mutable and NOT thread-safe (use for single-threaded string building). StringBuffer is mutable and thread-safe (synchronized, slower). For concatenation in loops, always use StringBuilder.",
    tips: "String concatenation with + creates multiple objects — StringBuilder avoids this."
  },
  {
    id: 192, topic: "Java Core", difficulty: "hard",
    scenario: "What is the Java classpath and how does class loading work?",
    options: [
      "Classpath is the source code directory; class loading compiles Java files at runtime",
      "Classpath tells the JVM where to find .class files; the ClassLoader hierarchy (Bootstrap → Extension → Application) loads classes on demand",
      "Classpath is only needed for third-party libraries, not your own code",
      "Class loading happens once at JVM startup — all classes are loaded upfront"
    ],
    correctOption: 1,
    answer: "The classpath tells the JVM where to find compiled .class files and JARs. Java uses a delegation-based ClassLoader hierarchy: Bootstrap (core Java classes) → Extension/Platform (ext/) → Application (your code + libs). Classes are loaded lazily — only when first referenced.",
    tips: "ClassNotFoundException = not on classpath; NoClassDefFoundError = was on classpath at compile but not at runtime."
  },
  {
    id: 193, topic: "Java Core", difficulty: "medium",
    scenario: "What is the try-with-resources statement?",
    options: [
      "A try block that limits the CPU and memory resources it can use",
      "Automatically closes resources (implementing AutoCloseable) when the try block exits, even if an exception occurs",
      "A try block that retries the operation with different resources on failure",
      "A try block that works only with file I/O resources"
    ],
    correctOption: 1,
    answer: "try-with-resources (Java 7+) automatically closes any resource that implements AutoCloseable when the try block completes. This replaces verbose try-finally blocks for closing streams, connections, etc. Multiple resources can be declared, and they're closed in reverse order.",
    tips: "Example: try (var br = new BufferedReader(new FileReader(file))) { ... }"
  },
  {
    id: 194, topic: "Java Core", difficulty: "hard",
    scenario: "What is the difference between checked and unchecked exceptions?",
    options: [
      "Checked exceptions crash the JVM; Unchecked exceptions are handled gracefully",
      "Checked exceptions must be caught or declared (extends Exception); Unchecked exceptions don't (extends RuntimeException)",
      "Checked are compile-time errors; Unchecked are runtime bugs that can't be caught",
      "There's no difference — all exceptions are handled the same way"
    ],
    correctOption: 1,
    answer: "Checked exceptions (extend Exception) must be either caught with try-catch or declared with 'throws' — the compiler enforces this. Examples: IOException, SQLException. Unchecked exceptions (extend RuntimeException) are not enforced by the compiler. Examples: NullPointerException, IllegalArgumentException.",
    tips: "Spring's @Transactional only rolls back for unchecked exceptions by default."
  },
  {
    id: 195, topic: "Java Core", difficulty: "easy",
    scenario: "What is autoboxing and unboxing in Java?",
    options: [
      "Autoboxing packages Java code into JAR files; Unboxing extracts them",
      "Autoboxing converts primitives to wrapper objects (int → Integer); Unboxing converts wrapper objects back to primitives (Integer → int)",
      "Autoboxing encrypts data; Unboxing decrypts it",
      "Autoboxing allocates heap memory; Unboxing frees it"
    ],
    correctOption: 1,
    answer: "Autoboxing is Java's automatic conversion from a primitive type to its corresponding wrapper class (int → Integer). Unboxing is the reverse (Integer → int). This lets you use primitives and objects interchangeably in collections (which can't hold primitives directly).",
    tips: "Beware: unboxing a null Integer throws NullPointerException."
  },
  {
    id: 196, topic: "Java Core", difficulty: "medium",
    scenario: "What is the difference between Comparable and Comparator?",
    options: [
      "Comparable is for sorting strings; Comparator is for sorting numbers",
      "Comparable defines natural ordering inside the class (compareTo); Comparator defines external/custom ordering (compare) — allows multiple sort strategies",
      "Comparable is newer and replaces Comparator since Java 8",
      "Comparable sorts ascending; Comparator sorts descending"
    ],
    correctOption: 1,
    answer: "Comparable is implemented by the class itself — defines a single natural ordering via compareTo(). Comparator is a separate class/lambda that defines custom ordering via compare(). Use Comparable for the default sort; Comparator for alternative sorts (e.g., sort by name, age, or salary).",
    tips: "Java 8: Comparator.comparing(Person::getName).thenComparing(Person::getAge)"
  },
  {
    id: 197, topic: "Java Core", difficulty: "hard",
    scenario: "What is a CompletableFuture?",
    options: [
      "A synchronous data structure for storing completed task results",
      "An async programming API (Java 8+) for composing non-blocking operations with methods like thenApply, thenCompose, and exceptionally",
      "A thread-safe collection for concurrent access",
      "A database transaction that guarantees completion"
    ],
    correctOption: 1,
    answer: "CompletableFuture (Java 8+) represents an async computation. It supports chaining (thenApply, thenCompose), combining (allOf, anyOf), and error handling (exceptionally, handle). It enables reactive-style programming without external libraries.",
    tips: "Use supplyAsync() for async execution and thenApply() for transformation chains."
  },
  {
    id: 198, topic: "Java Core", difficulty: "easy",
    scenario: "What is the 'this' keyword in Java?",
    options: [
      "A reference to the parent class",
      "A reference to the current object instance — used to resolve ambiguity between fields and parameters, call other constructors, or pass the current object",
      "A keyword that creates a new instance of the class",
      "A reference to the main method"
    ],
    correctOption: 1,
    answer: "'this' refers to the current object instance. Uses: disambiguate field names from parameter names (this.name = name), call another constructor (this()), pass the current object as an argument, and return the current object for method chaining.",
    tips: "this() must be the first statement in a constructor."
  },
  {
    id: 199, topic: "Java Core", difficulty: "medium",
    scenario: "What is the difference between TreeMap and HashMap?",
    options: [
      "TreeMap is faster for all operations; HashMap uses more memory",
      "HashMap is unordered with O(1) operations; TreeMap keeps keys sorted (natural or custom order) with O(log n) operations",
      "HashMap stores key-value pairs; TreeMap stores tree structures",
      "TreeMap is thread-safe; HashMap is not"
    ],
    correctOption: 1,
    answer: "HashMap stores entries in a hash table — O(1) average for get/put but no ordering. TreeMap stores entries in a Red-Black tree — O(log n) for operations but keeps keys sorted. Use HashMap for speed; TreeMap when you need sorted iteration.",
    tips: "LinkedHashMap maintains insertion order with O(1) operations — best of both worlds."
  },
  {
    id: 200, topic: "Java Core", difficulty: "hard",
    scenario: "What are records in Java?",
    options: [
      "A database record mapping annotation",
      "A concise syntax (Java 14+) for creating immutable data classes — auto-generates constructor, getters, equals, hashCode, and toString",
      "A logging mechanism that records method calls",
      "A file I/O API for reading records from CSV files"
    ],
    correctOption: 1,
    answer: "Records (Java 14+) are a concise way to declare immutable data carrier classes. 'record Point(int x, int y) {}' automatically generates: a constructor, accessor methods (x(), y()), equals(), hashCode(), and toString(). Fields are final. Great for DTOs and value objects.",
    tips: "Records can implement interfaces but can't extend classes (they implicitly extend Record)."
  },

  // --- SQL & DATABASES (201-210) ---
  {
    id: 201, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is a trigger in SQL?",
    options: [
      "A button in the database GUI that executes a query",
      "A procedure that automatically executes in response to DML events (INSERT, UPDATE, DELETE) on a table",
      "A scheduling mechanism for running queries at specific times",
      "A constraint that validates data before insertion"
    ],
    correctOption: 1,
    answer: "A trigger is a stored procedure that automatically fires when a specified DML event (INSERT, UPDATE, DELETE) occurs on a table. Triggers can execute BEFORE or AFTER the event. Uses: audit logging, enforcing complex business rules, maintaining derived data.",
    tips: "Avoid heavy logic in triggers — they're hidden and can cause performance issues."
  },
  {
    id: 202, topic: "SQL & Databases", difficulty: "easy",
    scenario: "What is the difference between DELETE, TRUNCATE, and DROP?",
    options: [
      "They all do the same thing — remove data from a table",
      "DELETE removes specific rows (can use WHERE, can rollback). TRUNCATE removes all rows fast (minimal logging). DROP removes the entire table structure",
      "DELETE is for rows; TRUNCATE is for columns; DROP is for databases",
      "TRUNCATE is the fastest way to remove one row"
    ],
    correctOption: 1,
    answer: "DELETE removes rows matching a WHERE condition (logged, can rollback, fires triggers). TRUNCATE removes ALL rows (minimal logging, faster, resets auto-increment, can't use WHERE). DROP removes the entire table including its structure/schema.",
    tips: "TRUNCATE is DDL (can't rollback in some databases); DELETE is DML (can rollback)."
  },
  {
    id: 203, topic: "SQL & Databases", difficulty: "hard",
    scenario: "What is a CTE (Common Table Expression)?",
    options: [
      "A permanent table that's commonly used across queries",
      "A named temporary result set defined with WITH keyword, existing only for the duration of a single query — improves readability and enables recursion",
      "A table expression that automatically caches results",
      "A cross-table expression for joining multiple databases"
    ],
    correctOption: 1,
    answer: "A CTE (WITH clause) defines a named temporary result set that exists only for one query. It improves readability by breaking complex queries into logical steps. Recursive CTEs can traverse hierarchical data (org charts, file trees). Example: WITH active_users AS (SELECT ... ) SELECT * FROM active_users.",
    tips: "CTEs aren't materialized by default — the optimizer may inline them."
  },
  {
    id: 204, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is the difference between OLTP and OLAP?",
    options: [
      "OLTP is for online apps; OLAP is for offline apps",
      "OLTP handles many short transactions (row-level, write-heavy). OLAP handles complex analytical queries over large datasets (column-level, read-heavy)",
      "OLTP uses SQL; OLAP uses NoSQL",
      "OLAP is a newer version of OLTP"
    ],
    correctOption: 1,
    answer: "OLTP (Online Transaction Processing): optimized for many concurrent, short transactions (INSERT, UPDATE). Normalized schemas, row-oriented storage. Examples: banking, e-commerce. OLAP (Online Analytical Processing): optimized for complex queries over large datasets. Denormalized, column-oriented storage. Examples: data warehousing, BI.",
    tips: "OLTP = MySQL/Postgres; OLAP = Snowflake, BigQuery, Redshift."
  },
  {
    id: 205, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is database replication?",
    options: [
      "Copying a database schema to another server without data",
      "Keeping copies of data on multiple servers for availability and read scaling — primary handles writes, replicas handle reads",
      "Replicating application code across database servers",
      "Creating temporary copies of tables for testing"
    ],
    correctOption: 1,
    answer: "Database replication maintains copies of data across multiple servers. The primary/master handles writes, and replicas/slaves handle reads. Types: synchronous (strong consistency, slower) and asynchronous (eventual consistency, faster). Improves read performance and provides failover capability.",
    tips: "Read replicas help with read-heavy workloads; they don't help with write scaling."
  },
  {
    id: 206, topic: "SQL & Databases", difficulty: "hard",
    scenario: "What is an execution plan and how do you use EXPLAIN?",
    options: [
      "A deployment plan for database migrations",
      "EXPLAIN shows how the database engine will execute a query — revealing index usage, join strategies, and cost estimates for optimization",
      "A plan that schedules query execution times",
      "A visual diagram of table relationships"
    ],
    correctOption: 1,
    answer: "EXPLAIN (or EXPLAIN ANALYZE) shows the query execution plan — the steps the database optimizer chose: which indexes it uses, join types (nested loop, hash, merge), estimated vs actual row counts, and cost. Essential for identifying slow queries and missing indexes.",
    tips: "Look for sequential scans on large tables — usually means a missing index."
  },
  {
    id: 207, topic: "SQL & Databases", difficulty: "easy",
    scenario: "What is a subquery?",
    options: [
      "A query that runs on a subset of columns",
      "A query nested inside another query — can be used in WHERE, FROM, or SELECT clauses",
      "A simplified query syntax for beginners",
      "A query that runs faster than a regular query"
    ],
    correctOption: 1,
    answer: "A subquery is a SELECT statement embedded inside another SQL statement. It can appear in WHERE (filtering), FROM (as a derived table), or SELECT (scalar subquery). Correlated subqueries reference the outer query and run once per outer row.",
    tips: "Prefer JOINs over correlated subqueries for better performance."
  },
  {
    id: 208, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is the difference between CHAR and VARCHAR?",
    options: [
      "CHAR stores characters; VARCHAR stores variable-length binaries",
      "CHAR is fixed-length (padded with spaces); VARCHAR is variable-length (stores only actual characters). CHAR is faster for fixed-size data",
      "VARCHAR is deprecated in favor of CHAR",
      "CHAR has a max length of 255; VARCHAR has no limit"
    ],
    correctOption: 1,
    answer: "CHAR(n) stores fixed-length strings — always uses n bytes, padded with spaces. VARCHAR(n) stores variable-length strings — uses only the bytes needed plus a length prefix. Use CHAR for fixed-size data (country codes, UUIDs); VARCHAR for variable text (names, emails).",
    tips: "CHAR(2) for state codes is more efficient than VARCHAR(2)."
  },
  {
    id: 209, topic: "SQL & Databases", difficulty: "hard",
    scenario: "What is a materialized view?",
    options: [
      "A view that uses CSS to style query results",
      "A view that physically stores query results on disk and must be refreshed — trades storage for faster read performance",
      "A view that can only be created by database admins",
      "A view that automatically updates in real-time"
    ],
    correctOption: 1,
    answer: "A materialized view pre-computes and stores the query results on disk (unlike regular views which re-execute the query). This makes reads extremely fast but requires explicit refresh (manual, scheduled, or on-commit). Great for expensive aggregations accessed frequently.",
    tips: "Tradeoff: fast reads vs stale data. Refresh strategy depends on freshness requirements."
  },
  {
    id: 210, topic: "SQL & Databases", difficulty: "medium",
    scenario: "What is a composite key?",
    options: [
      "A key made of letters and numbers",
      "A primary key consisting of two or more columns that together uniquely identify a row",
      "An encrypted key used for database security",
      "A key that references multiple foreign tables"
    ],
    correctOption: 1,
    answer: "A composite key (or compound key) is a primary key made up of two or more columns. No single column is unique on its own, but the combination is. Example: an enrollment table with (student_id, course_id) as the composite primary key.",
    tips: "Composite keys often appear in junction/bridge tables for many-to-many relationships."
  },

  // --- GIT (211-220) ---
  {
    id: 211, topic: "Git", difficulty: "easy",
    scenario: "What is 'git log' and how do you use it?",
    options: [
      "A command that logs error messages during git operations",
      "Shows the commit history of the current branch — with options for formatting, filtering by author, date, or file",
      "A command that creates a log file of all git commands you've run",
      "A command that shows the repository size and statistics"
    ],
    correctOption: 1,
    answer: "'git log' displays the commit history for the current branch. Useful options: --oneline (compact), --graph (visual branch graph), --author=\"name\", -n 5 (last 5 commits), --since=\"2024-01-01\", -- filename (history of specific file).",
    tips: "git log --oneline --graph --all gives a great visual overview of all branches."
  },
  {
    id: 212, topic: "Git", difficulty: "medium",
    scenario: "What is 'git bisect'?",
    options: [
      "A command that splits a repository into two parts",
      "A binary search tool that finds the exact commit that introduced a bug by testing commits between a known good and bad point",
      "A command that divides a branch into two new branches",
      "A tool for comparing two different repositories"
    ],
    correctOption: 1,
    answer: "'git bisect' performs a binary search through commit history to find which commit introduced a bug. You mark one commit as 'good' and one as 'bad', then Git checks out the midpoint for you to test. You mark it good/bad, and it narrows down — finding the culprit in O(log n) steps.",
    tips: "Can be automated: git bisect run ./test-script.sh"
  },
  {
    id: 213, topic: "Git", difficulty: "easy",
    scenario: "What is 'git diff'?",
    options: [
      "A command that shows the differences between two repositories",
      "Shows changes between working directory, staging area, and commits — what's been modified but not yet staged or committed",
      "A tool for resolving merge conflicts",
      "A command that creates a diff file for email patches"
    ],
    correctOption: 1,
    answer: "'git diff' shows unstaged changes. 'git diff --staged' shows staged changes. 'git diff branch1..branch2' compares branches. 'git diff HEAD~3' compares with 3 commits ago. The output shows added (+) and removed (-) lines.",
    tips: "Use 'git diff --stat' for a summary of changed files."
  },
  {
    id: 214, topic: "Git", difficulty: "hard",
    scenario: "What is a Git submodule?",
    options: [
      "A sub-directory within a Git repository",
      "A way to include one Git repository inside another as a dependency, pinned to a specific commit",
      "A module system for organizing large Git repositories",
      "A plugin that adds features to Git"
    ],
    correctOption: 1,
    answer: "A Git submodule embeds a reference to another Git repository at a specific commit inside your repo. The parent repo tracks the submodule's URL and commit SHA. Used for including shared libraries or dependencies. Cloned separately with 'git submodule update --init'.",
    tips: "Submodules are notoriously tricky — consider Git subtrees or package managers as alternatives."
  },
  {
    id: 215, topic: "Git", difficulty: "medium",
    scenario: "What is 'git tag' and when should you use it?",
    options: [
      "A way to label files within a repository",
      "Creates a named reference to a specific commit — used for marking release versions (v1.0.0, v2.1.3)",
      "A command for tagging issues in the Git issue tracker",
      "A way to categorize branches by type"
    ],
    correctOption: 1,
    answer: "'git tag' creates a reference point at a specific commit. Lightweight tags are just pointers; annotated tags (git tag -a) store extra metadata (tagger, date, message). Primarily used for marking release versions following semantic versioning.",
    tips: "Push tags explicitly: git push --tags. CI/CD often triggers releases on tag push."
  },
  {
    id: 216, topic: "Git", difficulty: "easy",
    scenario: "What is the staging area (index) in Git?",
    options: [
      "A temporary server where code is deployed for testing",
      "An intermediate area between the working directory and repository where you prepare (stage) changes before committing",
      "A cache that stores frequently accessed files",
      "The area where merge conflicts are resolved"
    ],
    correctOption: 1,
    answer: "The staging area (also called the index) is a buffer between your working directory and the Git repository. You use 'git add' to stage specific changes, then 'git commit' saves the staged snapshot. This lets you commit selectively — not all changes at once.",
    tips: "git add -p lets you stage individual hunks within a file."
  },
  {
    id: 217, topic: "Git", difficulty: "medium",
    scenario: "What is a fast-forward merge?",
    options: [
      "A merge that happens faster than normal merges",
      "When the target branch has no new commits since the feature branch diverged, Git just moves the pointer forward — no merge commit needed",
      "A merge that skips conflict resolution",
      "A merge that fast-forwards to the latest remote changes"
    ],
    correctOption: 1,
    answer: "A fast-forward merge occurs when there's a linear path from the current branch to the target. Git simply moves the branch pointer forward — no merge commit is created. This happens when the base branch hasn't had any new commits since the feature branch was created.",
    tips: "Use --no-ff to force a merge commit even during fast-forward (preserves branch history)."
  },
  {
    id: 218, topic: "Git", difficulty: "hard",
    scenario: "What is 'git worktree'?",
    options: [
      "A command that shows the directory tree of tracked files",
      "Allows you to check out multiple branches simultaneously in separate directories from a single repository",
      "A visualization tool for the commit graph",
      "A command that lists all files in the working tree"
    ],
    correctOption: 1,
    answer: "'git worktree' lets you have multiple working directories linked to the same repository, each checked out to a different branch. This means you can work on a hotfix on one branch while keeping your feature branch work untouched in another directory — no stashing needed.",
    tips: "git worktree add ../hotfix-dir hotfix-branch — creates a new working directory."
  },
  {
    id: 219, topic: "Git", difficulty: "medium",
    scenario: "What is 'git blame'?",
    options: [
      "A command that identifies who introduced bugs in the code",
      "Shows which commit and author last modified each line of a file — used for understanding code history and ownership",
      "A command that blames another developer for merge conflicts",
      "A reporting tool that tracks developer productivity"
    ],
    correctOption: 1,
    answer: "'git blame' annotates each line of a file with the commit hash, author, and date of the last change. It helps you understand when and why a line was changed, and who to ask about it. Use 'git blame -L 10,20 file.java' for specific line ranges.",
    tips: "Use -w to ignore whitespace changes and -M to detect moved lines."
  },
  {
    id: 220, topic: "Git", difficulty: "easy",
    scenario: "What is the HEAD in Git?",
    options: [
      "The first commit in the repository",
      "A pointer to the current commit/branch you're on — it moves when you checkout, commit, or reset",
      "The header of a Git configuration file",
      "The remote server's latest commit"
    ],
    correctOption: 1,
    answer: "HEAD is a pointer to the current commit you're on (usually via a branch reference). When you commit, HEAD advances to the new commit. 'Detached HEAD' means HEAD points directly to a commit instead of a branch. HEAD~1 means 'one commit before HEAD'.",
    tips: "HEAD~1 = parent commit. HEAD~3 = three commits back. HEAD^ = also parent (for merge commits: HEAD^2 = second parent)."
  },

  // --- REST API DESIGN (221-230) ---
  {
    id: 221, topic: "REST API Design", difficulty: "medium",
    scenario: "What is content negotiation in REST APIs?",
    options: [
      "Negotiating API pricing with the client",
      "The process where client and server agree on the response format (JSON, XML) via Accept and Content-Type headers",
      "A technique for compressing API responses",
      "A protocol for negotiating SSL certificates"
    ],
    correctOption: 1,
    answer: "Content negotiation is the mechanism where the client specifies its preferred response format via the Accept header (e.g., Accept: application/json) and the server responds accordingly. The Content-Type header indicates the actual format of the response body.",
    tips: "Most modern APIs default to JSON — XML support is rare in new APIs."
  },
  {
    id: 222, topic: "REST API Design", difficulty: "hard",
    scenario: "What is an API Gateway pattern?",
    options: [
      "A firewall specifically designed for API traffic",
      "A single entry point that aggregates multiple microservice APIs, handling cross-cutting concerns like auth, rate limiting, routing, and protocol translation",
      "A gateway that converts REST APIs to GraphQL",
      "A DNS service for routing API traffic"
    ],
    correctOption: 1,
    answer: "An API Gateway sits between clients and microservices as a reverse proxy. It handles: routing requests to appropriate services, authentication/authorization, rate limiting, request/response transformation, caching, load balancing, and circuit breaking. Examples: Kong, AWS API Gateway, NGINX.",
    tips: "BFF (Backend for Frontend) pattern: different API Gateways for web vs mobile clients."
  },
  {
    id: 223, topic: "REST API Design", difficulty: "easy",
    scenario: "What is a REST resource and how should URLs be structured?",
    options: [
      "Resources are server-side files; URLs point to file paths",
      "Resources are entities (users, orders); URLs use nouns (/users, /users/123/orders), not verbs — HTTP methods define the action",
      "Resources are API functions; URLs describe what the function does",
      "URL structure doesn't matter in REST — only the HTTP method matters"
    ],
    correctOption: 1,
    answer: "In REST, a resource is any entity that can be addressed (user, order, product). URLs should use nouns to identify resources: /users (collection), /users/123 (specific user), /users/123/orders (nested resource). HTTP methods (GET, POST, PUT, DELETE) define the action — don't use verbs in URLs.",
    tips: "Bad: GET /getUsers, POST /createUser. Good: GET /users, POST /users."
  },
  {
    id: 224, topic: "REST API Design", difficulty: "medium",
    scenario: "What is JWT (JSON Web Token)?",
    options: [
      "A database format for storing user sessions",
      "A compact, self-contained token with three parts (header.payload.signature) used for stateless authentication between client and server",
      "A JavaScript library for making API calls",
      "A JSON configuration file for web tokens"
    ],
    correctOption: 1,
    answer: "JWT is a compact token format: header (algorithm, type), payload (claims like user ID, roles, expiration), and signature (verifies integrity). The server issues a JWT on login; the client sends it in the Authorization header. The server validates it without a database lookup (stateless).",
    tips: "Store JWTs in httpOnly cookies (not localStorage) to prevent XSS. Keep them short-lived."
  },
  {
    id: 225, topic: "REST API Design", difficulty: "medium",
    scenario: "What is the difference between PUT and PATCH?",
    options: [
      "PUT is for creating; PATCH is for updating",
      "PUT replaces the entire resource (full update); PATCH modifies only the specified fields (partial update)",
      "PATCH is faster because it sends less data",
      "PUT is idempotent; PATCH is not — that's the only difference"
    ],
    correctOption: 1,
    answer: "PUT replaces the entire resource — you must send the complete object. If you omit a field, it's set to null/default. PATCH updates only the fields you include in the request. Both are used for updates, but PATCH is more bandwidth-efficient for partial changes.",
    tips: "PUT is idempotent by definition. PATCH can be idempotent but isn't required to be."
  },
  {
    id: 226, topic: "REST API Design", difficulty: "hard",
    scenario: "What is OAuth 2.0?",
    options: [
      "A password hashing algorithm",
      "An authorization framework that enables third-party apps to access user resources without sharing passwords — using access tokens and grant types",
      "A database access control mechanism",
      "An encryption protocol for API communication"
    ],
    correctOption: 1,
    answer: "OAuth 2.0 is an authorization framework that allows third-party applications to access user resources on a server (like Google or GitHub) without the user sharing their password. It uses access tokens and defines grant types: Authorization Code (web apps), Client Credentials (machine-to-machine), etc.",
    tips: "OAuth is for authorization. OpenID Connect (built on OAuth 2.0) adds authentication (identity)."
  },
  {
    id: 227, topic: "REST API Design", difficulty: "easy",
    scenario: "What is a webhook?",
    options: [
      "A hook in the code that intercepts web requests",
      "A callback mechanism where a server sends an HTTP POST to a registered URL when an event occurs — like push notifications for APIs",
      "A web-based debugging tool",
      "A URL shortening service for APIs"
    ],
    correctOption: 1,
    answer: "A webhook is a user-defined HTTP callback. When a specific event occurs (e.g., payment received, PR merged), the service sends an HTTP POST to a URL you've registered. Unlike polling, webhooks are event-driven — your server receives data immediately when something happens.",
    tips: "Always verify webhook signatures to prevent spoofed requests."
  },
  {
    id: 228, topic: "REST API Design", difficulty: "medium",
    scenario: "What is API throttling vs rate limiting?",
    options: [
      "They are identical concepts",
      "Rate limiting caps total requests per time window (hard limit). Throttling slows down or queues excess requests instead of rejecting them outright",
      "Throttling is for internal APIs; Rate limiting is for public APIs",
      "Rate limiting is server-side; Throttling is client-side"
    ],
    correctOption: 1,
    answer: "Rate limiting sets a hard cap on requests per time window — exceeding it returns 429 Too Many Requests. Throttling is a softer mechanism that slows down (delays) or queues excess requests rather than rejecting them. In practice, the terms are often used interchangeably.",
    tips: "Common algorithms: Token Bucket (bursty), Sliding Window (smooth), Leaky Bucket (constant rate)."
  },
  {
    id: 229, topic: "REST API Design", difficulty: "hard",
    scenario: "What is the Richardson Maturity Model?",
    options: [
      "A model for measuring API response time",
      "A 4-level model for REST maturity: Level 0 (single URL, POST only) → Level 1 (resources) → Level 2 (HTTP verbs) → Level 3 (HATEOAS)",
      "A security maturity model for API authentication",
      "A database normalization model applied to APIs"
    ],
    correctOption: 1,
    answer: "The Richardson Maturity Model grades REST API maturity: Level 0 — one endpoint, everything via POST (RPC-style). Level 1 — separate resources (/users, /orders). Level 2 — proper HTTP verbs (GET, POST, PUT, DELETE). Level 3 — HATEOAS (hypermedia links in responses). Most APIs reach Level 2.",
    tips: "Level 3 (HATEOAS) is rarely implemented in practice but is 'true REST'."
  },
  {
    id: 230, topic: "REST API Design", difficulty: "medium",
    scenario: "What is an ETag and how does it help with caching?",
    options: [
      "A tag for labeling API endpoints",
      "An opaque identifier (hash) for a resource version — the client sends it with If-None-Match and the server returns 304 Not Modified if unchanged",
      "An HTML tag for embedding APIs in web pages",
      "A logging tag for tracking API requests"
    ],
    correctOption: 1,
    answer: "An ETag (Entity Tag) is a response header containing a unique identifier (usually a hash) for a specific version of a resource. On subsequent requests, the client sends 'If-None-Match: <etag>' — if the resource hasn't changed, the server returns 304 Not Modified (no body), saving bandwidth.",
    tips: "ETags enable conditional requests — great for APIs with cacheable, frequently-read data."
  },

  // --- AWS / CLOUD (231-240) ---
  {
    id: 231, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is AWS ECS vs EKS?",
    options: [
      "ECS is for small containers; EKS is for large containers",
      "ECS is AWS's proprietary container orchestrator. EKS is managed Kubernetes. Both run containers, but ECS is simpler and AWS-native while EKS is K8s-compatible",
      "ECS runs Docker; EKS runs a different container runtime",
      "EKS is newer and replaces ECS"
    ],
    correctOption: 1,
    answer: "ECS (Elastic Container Service) is AWS's own container orchestration platform — simpler, deeply integrated with AWS services. EKS (Elastic Kubernetes Service) is managed Kubernetes — portable, open-source ecosystem, but more complex. Both can use Fargate (serverless) or EC2 for compute.",
    tips: "Choose ECS for AWS-only workloads; EKS if you need K8s portability or ecosystem."
  },
  {
    id: 232, topic: "AWS / Cloud", difficulty: "easy",
    scenario: "What is Elastic Load Balancing (ELB)?",
    options: [
      "A service that balances costs across AWS accounts",
      "Automatically distributes incoming traffic across multiple targets (EC2, containers, IPs) — types: ALB (HTTP/HTTPS), NLB (TCP/UDP), CLB (legacy)",
      "A tool for balancing CPU usage across EC2 instances",
      "A DNS service for routing traffic to the nearest region"
    ],
    correctOption: 1,
    answer: "ELB distributes incoming traffic across multiple targets. Application Load Balancer (ALB) operates at Layer 7 (HTTP) with path-based routing. Network Load Balancer (NLB) operates at Layer 4 (TCP) for extreme performance. Classic Load Balancer (CLB) is legacy.",
    tips: "ALB for web apps and APIs; NLB for gaming, IoT, or ultra-low latency."
  },
  {
    id: 233, topic: "AWS / Cloud", difficulty: "hard",
    scenario: "What is AWS Well-Architected Framework?",
    options: [
      "A set of AWS-approved architecture diagrams",
      "A framework of 6 pillars for building secure, performant, resilient, and efficient cloud workloads: Operational Excellence, Security, Reliability, Performance Efficiency, Cost Optimization, Sustainability",
      "A certification program for AWS architects",
      "A tool that automatically architects your AWS infrastructure"
    ],
    correctOption: 1,
    answer: "The AWS Well-Architected Framework provides best practices across 6 pillars: 1) Operational Excellence (automation, observability), 2) Security (least privilege, encryption), 3) Reliability (fault tolerance, recovery), 4) Performance Efficiency (right-sizing), 5) Cost Optimization (pay for what you use), 6) Sustainability (minimize environmental impact).",
    tips: "Use the Well-Architected Tool in AWS Console for free architecture reviews."
  },
  {
    id: 234, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is Amazon ElastiCache?",
    options: [
      "A CDN service that caches static assets",
      "A managed in-memory caching service supporting Redis and Memcached — reduces database load and improves latency",
      "A disk-based caching layer for S3 objects",
      "A browser caching service for web applications"
    ],
    correctOption: 1,
    answer: "ElastiCache is a managed in-memory data store service supporting Redis and Memcached. It caches frequently accessed data to reduce database load and improve response times. Redis supports persistence, pub/sub, and data structures; Memcached is simpler and multi-threaded.",
    tips: "Use Redis for complex data types and persistence; Memcached for simple key-value caching."
  },
  {
    id: 235, topic: "AWS / Cloud", difficulty: "easy",
    scenario: "What is Amazon Route 53?",
    options: [
      "A routing table service for VPC networks",
      "AWS's managed DNS service — handles domain registration, DNS routing, and health checks with various routing policies",
      "A network firewall that routes traffic on port 53",
      "A message routing service for microservices"
    ],
    correctOption: 1,
    answer: "Route 53 is AWS's scalable DNS web service. It provides: domain name registration, DNS routing (translating names to IPs), and health checking. Routing policies include: Simple, Weighted, Latency-based, Failover, Geolocation, and Multi-Value.",
    tips: "Named after port 53 (DNS). Use latency-based routing for global applications."
  },
  {
    id: 236, topic: "AWS / Cloud", difficulty: "hard",
    scenario: "What is the difference between AWS Secrets Manager and Parameter Store?",
    options: [
      "Secrets Manager is for passwords; Parameter Store is for configuration values only",
      "Secrets Manager has automatic rotation and costs per secret. Parameter Store is free for standard params but has no auto-rotation — use Secrets Manager for sensitive credentials",
      "Parameter Store is deprecated in favor of Secrets Manager",
      "They are identical services with different names"
    ],
    correctOption: 1,
    answer: "Both store sensitive data, but: Secrets Manager supports automatic secret rotation (e.g., DB passwords), cross-account access, and costs ~$0.40/secret/month. Parameter Store (SSM) is free for standard parameters (up to 10,000), supports hierarchies (/app/prod/db-url), but has no built-in rotation.",
    tips: "Use Secrets Manager for DB credentials needing rotation; Parameter Store for config values."
  },
  {
    id: 237, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is AWS Fargate?",
    options: [
      "A virtual machine service similar to EC2",
      "Serverless compute for containers — run ECS/EKS tasks without managing EC2 instances; pay per vCPU and memory per second",
      "A file transfer service for moving data to AWS",
      "A batch processing service for large datasets"
    ],
    correctOption: 1,
    answer: "Fargate is serverless compute for containers. You define CPU/memory requirements, and Fargate handles the underlying infrastructure — no EC2 instances to manage, patch, or scale. Works with both ECS and EKS. You pay for the vCPU and memory your containers actually use.",
    tips: "Fargate is simpler but more expensive per unit than EC2. Good for variable/bursty workloads."
  },
  {
    id: 238, topic: "AWS / Cloud", difficulty: "easy",
    scenario: "What are AWS Security Groups?",
    options: [
      "Groups of IAM users with shared permissions",
      "Virtual firewalls for EC2 instances that control inbound and outbound traffic at the instance level using allow rules",
      "Encryption key groups for S3 bucket security",
      "Teams of security engineers at AWS"
    ],
    correctOption: 1,
    answer: "Security Groups act as virtual firewalls for EC2 instances (and other resources). They control inbound and outbound traffic with rules specifying protocol, port, and source/destination. They are stateful (return traffic is automatically allowed) and only have ALLOW rules (no explicit DENY).",
    tips: "Security Groups = instance level, stateful. NACLs = subnet level, stateless, support DENY rules."
  },
  {
    id: 239, topic: "AWS / Cloud", difficulty: "hard",
    scenario: "What is AWS Step Functions?",
    options: [
      "A CI/CD tool for step-by-step deployments",
      "A serverless orchestration service that coordinates multiple AWS services into visual workflows using state machines",
      "A debugging tool that steps through Lambda functions",
      "A tutorial service that teaches AWS step by step"
    ],
    correctOption: 1,
    answer: "Step Functions is a serverless workflow orchestrator. You define workflows as state machines using JSON (Amazon States Language). It coordinates Lambda functions, ECS tasks, SQS, and more with built-in error handling, retries, and parallel execution. The visual console shows real-time execution progress.",
    tips: "Standard workflows for long-running (up to 1 year); Express workflows for high-volume, short-duration."
  },
  {
    id: 240, topic: "AWS / Cloud", difficulty: "medium",
    scenario: "What is Amazon Cognito?",
    options: [
      "An AI service for natural language processing",
      "A managed authentication/authorization service providing user sign-up, sign-in, and access control with user pools and identity pools",
      "A database query optimizer",
      "A monitoring service for cognitive workloads"
    ],
    correctOption: 1,
    answer: "Amazon Cognito provides user identity management. User Pools handle sign-up/sign-in (username/password, social login, MFA) and issue JWTs. Identity Pools provide temporary AWS credentials for accessing resources (S3, DynamoDB). Together they handle full auth for web/mobile apps.",
    tips: "User Pool = authentication (who). Identity Pool = authorization (access to AWS resources)."
  },

  // --- SYSTEM DESIGN (241-260) ---
  {
    id: 241, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a URL shortener like bit.ly?",
    options: [
      "Store the full URL in the path itself using URL encoding",
      "Generate a unique short key (Base62 encoding of an auto-increment ID or hash), store mapping in DB, redirect on lookup via 301/302",
      "Use DNS records to map short URLs to long URLs",
      "Compress the URL using gzip and store the compressed version"
    ],
    correctOption: 1,
    answer: "Generate a unique short key using Base62 encoding (a-z, A-Z, 0-9) of an auto-increment ID or MD5/SHA hash. Store the short→long mapping in a key-value store (Redis for speed, DB for durability). On request, look up the key and return a 301 (permanent) or 302 (temporary) redirect. For scale: use a counter service or pre-generated key pool to avoid collisions.",
    tips: "Discuss read-heavy ratio (~100:1), caching hot URLs, analytics tracking, and expiration policies."
  },
  {
    id: 242, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a rate limiter?",
    options: [
      "Block all requests after a server reaches 50% CPU usage",
      "Use algorithms like Token Bucket, Sliding Window, or Fixed Window Counter to track and limit requests per client within a time window",
      "Add a sleep(1s) delay to every API response",
      "Use a load balancer to equally distribute requests across servers"
    ],
    correctOption: 1,
    answer: "Common algorithms: Token Bucket (tokens added at fixed rate, each request costs a token), Sliding Window Log (track timestamps of each request), Fixed Window Counter (count per time window), Sliding Window Counter (hybrid). Store counters in Redis for distributed systems. Return 429 Too Many Requests when limit exceeded. Key decisions: rate limit by IP, user ID, or API key.",
    tips: "Token Bucket is most common in production (used by Stripe, AWS). Discuss where to place it: API gateway vs middleware."
  },
  {
    id: 243, topic: "System Design", difficulty: "medium",
    scenario: "What is Event-Driven Architecture?",
    options: [
      "An architecture where all services poll a database every second for changes",
      "An architecture where services communicate by producing and consuming events through a message broker, enabling loose coupling and async processing",
      "An architecture where events are stored in log files and processed nightly",
      "An architecture that only responds to user click events in the browser"
    ],
    correctOption: 1,
    answer: "Services produce events (e.g., 'OrderPlaced') to a message broker (Kafka, RabbitMQ, SNS/SQS). Other services consume these events asynchronously. Benefits: loose coupling (producers don't know consumers), scalability (consumers scale independently), resilience (events can be replayed). Patterns: Event Notification, Event-Carried State Transfer, Event Sourcing.",
    tips: "Mention Kafka for high-throughput event streaming and how it differs from traditional message queues."
  },
  {
    id: 244, topic: "System Design", difficulty: "easy",
    scenario: "What is a CDN (Content Delivery Network)?",
    options: [
      "A centralized database that stores all website content",
      "A geographically distributed network of servers that caches and delivers content from the nearest edge location to reduce latency",
      "A tool for compressing images before uploading them",
      "A firewall that filters malicious content from web pages"
    ],
    correctOption: 1,
    answer: "A CDN is a network of servers distributed worldwide (edge locations). Static content (images, CSS, JS, videos) is cached at edge nodes closest to users, reducing latency and load on origin servers. Examples: CloudFront, Cloudflare, Akamai. Dynamic content can also be accelerated via optimized routing.",
    tips: "Discuss cache invalidation strategies: TTL, purge API, versioned filenames."
  },
  {
    id: 245, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a notification system (push, email, SMS)?",
    options: [
      "Send notifications synchronously from each microservice directly to users",
      "Build a centralized notification service with message queue, template engine, provider adapters, preference management, and delivery tracking",
      "Store all notifications in a database and let users poll for them",
      "Use a single third-party API for all notification types"
    ],
    correctOption: 1,
    answer: "Components: (1) API/Event ingestion — services publish notification requests, (2) Message queue (Kafka/SQS) for reliability and decoupling, (3) Template service — renders messages from templates + variables, (4) User preference service — checks opt-in/out, channels, quiet hours, (5) Provider adapters — FCM for push, SES/SendGrid for email, Twilio for SMS, (6) Delivery tracker — logs status, handles retries with exponential backoff, (7) Analytics — open rates, delivery rates.",
    tips: "Discuss priority levels (urgent vs marketing), rate limiting per user, and idempotency to prevent duplicate sends."
  },
  {
    id: 246, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between SQL and NoSQL databases?",
    options: [
      "SQL is for small data; NoSQL is for big data",
      "SQL databases are relational with fixed schemas and ACID guarantees; NoSQL databases offer flexible schemas, horizontal scaling, and eventual consistency — choose based on data model and scale needs",
      "NoSQL is always faster than SQL",
      "SQL databases cannot scale beyond a single server"
    ],
    correctOption: 1,
    answer: "SQL (PostgreSQL, MySQL): Relational, fixed schema, ACID transactions, strong consistency, vertical scaling. Best for structured data with complex queries and joins. NoSQL (MongoDB, DynamoDB, Cassandra): Flexible schema, horizontal scaling, eventual consistency (configurable). Types: Document, Key-Value, Column-Family, Graph. Choose based on: data structure, query patterns, consistency needs, and scale requirements.",
    tips: "Don't say 'NoSQL is better' — explain trade-offs. Many systems use both (polyglot persistence)."
  },
  {
    id: 247, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a chat system like WhatsApp/Slack?",
    options: [
      "Use HTTP polling where clients check for new messages every second",
      "Use WebSockets for real-time bidirectional communication, with message queues for delivery guarantees, and a fan-out service for group messages",
      "Store messages in browser localStorage and sync on page refresh",
      "Use email protocols (SMTP) to deliver chat messages"
    ],
    correctOption: 1,
    answer: "Components: (1) WebSocket gateway — persistent connections for real-time delivery, (2) Chat service — handles message routing, (3) Message queue (Kafka) — ensures delivery even when recipient is offline, (4) Message store — Cassandra/HBase for write-heavy storage with partition by chat_id, (5) Presence service — tracks online/offline/typing status, (6) Push notification service — for offline users, (7) Media service — for images/files (S3 + CDN). Group chats use fan-out: message written once, delivered to each member's queue.",
    tips: "Discuss message ordering (per-chat sequence IDs), read receipts, end-to-end encryption, and offline message sync."
  },
  {
    id: 248, topic: "System Design", difficulty: "easy",
    scenario: "What is Database Sharding?",
    options: [
      "Creating read replicas of a database for backup purposes",
      "Splitting a large database into smaller, faster pieces (shards) distributed across multiple servers, each holding a subset of the data",
      "Encrypting database columns to protect sensitive data",
      "Compressing database tables to save storage space"
    ],
    correctOption: 1,
    answer: "Sharding partitions data across multiple database instances. Each shard holds a subset of rows (e.g., users A-M on shard 1, N-Z on shard 2). Strategies: Hash-based (hash of key mod N), Range-based (date ranges), Directory-based (lookup table). Benefits: horizontal scaling, reduced query load per shard. Challenges: cross-shard queries, rebalancing, hotspots.",
    tips: "Discuss the difficulty of joins across shards and how consistent hashing helps with rebalancing."
  },
  {
    id: 249, topic: "System Design", difficulty: "medium",
    scenario: "What is the CQRS pattern?",
    options: [
      "A caching strategy that queries Redis before the database",
      "Command Query Responsibility Segregation — separate the read model (optimized for queries) from the write model (optimized for commands)",
      "A pattern for compressing queries to reduce network bandwidth",
      "A database replication strategy for disaster recovery"
    ],
    correctOption: 1,
    answer: "CQRS separates the write path (commands that change state) from the read path (queries that return data). The write model is normalized for consistency; the read model is denormalized for fast queries. Often paired with Event Sourcing — writes produce events, a projector builds read-optimized views. Benefits: independent scaling of reads vs writes, optimized data models for each. Trade-off: eventual consistency between models.",
    tips: "Not every system needs CQRS — it adds complexity. Use it when read and write patterns differ dramatically."
  },
  {
    id: 250, topic: "System Design", difficulty: "medium",
    scenario: "What is a Circuit Breaker pattern?",
    options: [
      "A hardware device that prevents electrical overload in data centers",
      "A design pattern that prevents cascading failures by stopping calls to a failing service after a threshold, allowing it time to recover",
      "A load balancer algorithm that distributes traffic in a circular pattern",
      "A database lock mechanism that prevents concurrent writes"
    ],
    correctOption: 1,
    answer: "Three states: Closed (normal — requests pass through, failures counted), Open (tripped — requests fail immediately without calling the service, returns fallback), Half-Open (after timeout, allows a few test requests to check recovery). Prevents cascading failures when a downstream service is slow/down. Libraries: Resilience4j (Java), Hystrix (deprecated), Polly (.NET).",
    tips: "Pair with retries (with exponential backoff) and bulkheads for a complete resilience strategy."
  },
  {
    id: 251, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed task scheduler like cron at scale?",
    options: [
      "Run a single cron server and restart it if it fails",
      "Use a coordination service (ZooKeeper/etcd) for leader election, a persistent job store, and worker nodes that pull tasks — ensuring exactly-once execution with distributed locks",
      "Let each server run its own cron independently",
      "Use sleep() loops in application code to schedule tasks"
    ],
    correctOption: 1,
    answer: "Components: (1) Job store — DB/Redis storing job definitions, schedules, and state, (2) Scheduler service — leader-elected (via ZooKeeper/etcd) node that evaluates cron expressions and enqueues due jobs, (3) Message queue — decouples scheduling from execution, (4) Worker pool — pulls jobs, executes, reports results, (5) Distributed lock — prevents duplicate execution across workers. Ensure idempotency, support retries with dead letter queues, and provide a dashboard for monitoring.",
    tips: "Discuss exactly-once vs at-least-once semantics and how distributed locks (Redis SETNX) prevent duplicate runs."
  },
  {
    id: 252, topic: "System Design", difficulty: "easy",
    scenario: "What is an API Gateway?",
    options: [
      "A database proxy that optimizes SQL queries",
      "A single entry point for all client requests that handles routing, authentication, rate limiting, and load balancing before forwarding to backend microservices",
      "A tool for generating API documentation automatically",
      "A service that converts REST APIs to GraphQL"
    ],
    correctOption: 1,
    answer: "An API Gateway sits between clients and microservices. It handles: request routing (path-based to correct service), authentication/authorization (JWT validation), rate limiting, request/response transformation, caching, load balancing, SSL termination, and logging. Examples: Kong, AWS API Gateway, NGINX, Zuul. Prevents clients from needing to know about individual service locations.",
    tips: "Discuss the BFF (Backend For Frontend) pattern where different gateways serve web vs mobile clients."
  },
  {
    id: 253, topic: "System Design", difficulty: "medium",
    scenario: "What is Consistent Hashing and why is it used?",
    options: [
      "A hashing algorithm that always produces the same hash for the same input",
      "A technique where nodes and keys are mapped to a hash ring, so adding/removing nodes only redistributes a minimal number of keys — crucial for distributed caches and databases",
      "A method to ensure all database rows have unique hash values",
      "A consensus algorithm used by blockchain networks"
    ],
    correctOption: 1,
    answer: "In consistent hashing, both servers and keys are mapped to positions on a circular hash ring. A key is assigned to the nearest server clockwise on the ring. When a server is added/removed, only keys between the new/removed node and its predecessor are redistributed — not all keys. Virtual nodes (multiple positions per server) ensure even distribution. Used by: DynamoDB, Cassandra, Memcached, CDNs.",
    tips: "Without consistent hashing, adding a server to a cluster would remap almost all keys (hash(key) mod N changes)."
  },
  {
    id: 254, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a search autocomplete / typeahead system?",
    options: [
      "Run a SQL LIKE query against the full database on every keystroke",
      "Use a Trie data structure (or prefix index) with popularity ranking, cached in memory, updated asynchronously from search analytics",
      "Send the partial query to a third-party search engine API",
      "Pre-generate all possible completions and store them as static files"
    ],
    correctOption: 1,
    answer: "Components: (1) Trie (prefix tree) — stores search phrases, each node has top-K suggestions by popularity, (2) Data collection — aggregate search queries hourly/daily to compute popularity, (3) Trie builder — offline job rebuilds trie from aggregated data, (4) Cache layer — CDN/Redis caches top suggestions for common prefixes, (5) API — returns top 5-10 suggestions within 100ms. Optimizations: only query after 2+ characters, debounce (200ms), filter offensive content.",
    tips: "Discuss the trade-off between real-time freshness (trending searches) and pre-computed suggestions."
  },
  {
    id: 255, topic: "System Design", difficulty: "medium",
    scenario: "What is the Saga pattern for distributed transactions?",
    options: [
      "A Norse mythology-inspired naming convention for microservices",
      "A pattern that manages distributed transactions as a sequence of local transactions, each with a compensating action for rollback — avoiding two-phase commit",
      "A logging pattern that records all database transactions to a saga log file",
      "A UI pattern for multi-step form wizards"
    ],
    correctOption: 1,
    answer: "A Saga is a sequence of local transactions where each step publishes an event triggering the next. If a step fails, compensating transactions undo previous steps (e.g., cancel order → refund payment → restore inventory). Two types: Choreography (services listen to events, no central coordinator) and Orchestration (a saga orchestrator tells each service what to do). Avoids distributed locks and two-phase commit.",
    tips: "Orchestration is easier to debug/monitor. Choreography scales better but is harder to trace. Mention idempotency of compensating actions."
  },
  {
    id: 256, topic: "System Design", difficulty: "easy",
    scenario: "What is a Message Queue and why use one?",
    options: [
      "A type of database that stores messages in a table format",
      "An async communication mechanism where producers send messages to a queue and consumers process them independently — enabling decoupling, buffering, and resilience",
      "A real-time chat protocol for inter-service communication",
      "A network tool that queues and prioritizes TCP packets"
    ],
    correctOption: 1,
    answer: "A message queue (RabbitMQ, SQS, Kafka) sits between services. Producers push messages; consumers pull and process them. Benefits: decoupling (producer doesn't wait for consumer), buffering (handles traffic spikes), resilience (messages survive consumer crashes), load leveling (consumers process at their own pace). Use cases: order processing, email sending, log aggregation, event streaming.",
    tips: "Distinguish queues (one consumer per message) from topics/pub-sub (multiple consumers per message)."
  },
  {
    id: 257, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed file storage system like Google Drive?",
    options: [
      "Store all files on a single high-capacity NAS server with RAID",
      "Chunk files into blocks, replicate across multiple storage nodes, track metadata in a separate service, sync changes via event-driven notifications",
      "Use a relational database to store file contents as BLOBs",
      "Mount a shared NFS volume across all application servers"
    ],
    correctOption: 1,
    answer: "Components: (1) Client — watches local folder, detects changes, syncs deltas, (2) Metadata service — stores file tree, permissions, versions, sharing in DB (sharded by user), (3) Block storage — files chunked into 4MB blocks, deduplicated by content hash, stored on distributed storage nodes with 3x replication, (4) Sync service — uses WebSockets to push change notifications to other devices, (5) Notification queue (Kafka) — broadcasts file change events. Optimizations: delta sync (only changed blocks), compression, CDN for shared files.",
    tips: "Discuss conflict resolution (last-write-wins vs manual merge), versioning, and how deduplication saves storage."
  },
  {
    id: 258, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between Optimistic and Pessimistic Locking?",
    options: [
      "Optimistic locking is faster; Pessimistic locking is more accurate",
      "Optimistic locking allows concurrent access and checks for conflicts at commit time (version/ETag); Pessimistic locking acquires exclusive locks upfront to prevent conflicts",
      "Optimistic uses row-level locks; Pessimistic uses table-level locks",
      "They are different names for the same locking mechanism"
    ],
    correctOption: 1,
    answer: "Pessimistic: Lock the resource before reading/writing (SELECT FOR UPDATE). No other transaction can modify it until the lock is released. Guarantees no conflicts but reduces throughput. Optimistic: Allow concurrent access. Each record has a version number/timestamp. On update, check if the version matches — if not, someone else changed it (retry or fail). Higher throughput but requires conflict handling. Use pessimistic for high-contention, optimistic for low-contention scenarios.",
    tips: "JPA uses @Version for optimistic locking. HTTP uses ETags for the same concept in REST APIs."
  },
  {
    id: 259, topic: "System Design", difficulty: "easy",
    scenario: "What is a Reverse Proxy?",
    options: [
      "A proxy that reverses the order of HTTP request headers",
      "A server that sits in front of backend servers, forwarding client requests to them — providing load balancing, SSL termination, caching, and security",
      "A client-side tool that routes browser traffic through a VPN",
      "A database proxy that reverses query results for pagination"
    ],
    correctOption: 1,
    answer: "A reverse proxy sits between clients and backend servers. Clients send requests to the proxy, which forwards them to the appropriate backend. Benefits: load balancing, SSL termination (handle HTTPS at proxy, HTTP internally), caching static content, compression, security (hides backend server IPs), rate limiting. Examples: NGINX, HAProxy, Traefik, AWS ALB.",
    tips: "Forward proxy acts on behalf of the client (hiding client). Reverse proxy acts on behalf of the server (hiding server)."
  },
  {
    id: 260, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time leaderboard for a game with millions of players?",
    options: [
      "Query the database with ORDER BY score DESC LIMIT 100 on every request",
      "Use a Redis Sorted Set (ZADD/ZRANGE) for O(log N) updates and O(log N + M) range queries, with periodic persistence to a database",
      "Maintain a sorted array in application memory and binary search for updates",
      "Use a blockchain to ensure leaderboard integrity"
    ],
    correctOption: 1,
    answer: "Redis Sorted Sets are ideal: ZADD updates a player's score in O(log N), ZREVRANGE gets top-K in O(log N + K), ZREVRANK gets a player's rank in O(log N). For millions of players, Redis handles this in-memory with sub-millisecond latency. Persist to DB periodically for durability. For global + friend leaderboards: global = one sorted set, friend = compute on read by fetching friend scores. Sharding: partition by region or game mode if needed.",
    tips: "Discuss daily/weekly/all-time boards (separate sorted sets with TTL), and how to handle ties (secondary sort by timestamp)."
  },
];

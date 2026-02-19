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
  {
    id: 261, topic: "System Design", difficulty: "medium",
    scenario: "What is Event Sourcing?",
    options: [
      "A pattern where you log errors from events to a central monitoring system",
      "A pattern that stores all changes to application state as a sequence of immutable events, rather than storing current state directly",
      "A technique for sourcing events from third-party APIs",
      "A method for broadcasting events to all microservices simultaneously"
    ],
    correctOption: 1,
    answer: "Instead of storing current state (e.g., account balance = $500), store every event that led to it (deposited $1000, withdrew $200, deposited $100, withdrew $400). Current state is derived by replaying events. Benefits: complete audit trail, time-travel debugging, rebuild read models from events. Trade-offs: storage grows over time (use snapshots), eventual consistency, increased complexity.",
    tips: "Often paired with CQRS. Used by banks, e-commerce (order history), and version control systems (git is event sourcing)."
  },
  {
    id: 262, topic: "System Design", difficulty: "easy",
    scenario: "What is a Proxy Server?",
    options: [
      "A server that stores backup copies of production databases",
      "An intermediary server that sits between a client and the destination server, forwarding requests on behalf of the client",
      "A testing server that simulates production environments",
      "A server that converts HTTP to HTTPS"
    ],
    correctOption: 1,
    answer: "A proxy server acts as an intermediary. Forward proxy: sits in front of clients, hides client identity (used for privacy, content filtering, bypassing restrictions). Reverse proxy: sits in front of servers, hides server identity (used for load balancing, caching, security). Both can cache responses, filter content, and log traffic.",
    tips: "VPNs use forward proxies. NGINX/Cloudflare use reverse proxies. Know the difference in interviews."
  },
  {
    id: 263, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a web crawler like Googlebot?",
    options: [
      "Open a browser tab for each URL and manually save the HTML",
      "Use a distributed system with a URL frontier (priority queue), fetcher workers, content parser, URL deduplication (Bloom filter), and a politeness policy (robots.txt + rate limiting per domain)",
      "Write a single-threaded script that recursively follows links",
      "Use an iframe to load each page and extract its content"
    ],
    correctOption: 1,
    answer: "Components: (1) Seed URLs — starting points, (2) URL Frontier — priority queue (BFS) with per-domain queues for politeness, (3) DNS resolver — with caching, (4) Fetcher workers — distributed HTTP clients, (5) Content parser — extract links, text, metadata, (6) URL deduplication — Bloom filter to avoid re-crawling, (7) Content deduplication — SimHash to detect near-duplicate pages, (8) Data store — store crawled pages for indexing. Respect robots.txt, rate limit per domain, handle redirects/traps.",
    tips: "Discuss BFS vs DFS traversal, how to handle dynamic JS-rendered pages (headless browser), and incremental re-crawling strategies."
  },
  {
    id: 264, topic: "System Design", difficulty: "medium",
    scenario: "What is the Strangler Fig pattern for migrating legacy systems?",
    options: [
      "A pattern for removing unused code from legacy applications",
      "Incrementally replace parts of a legacy system by routing specific features to new services while keeping the old system running, until the legacy system is fully replaced",
      "A testing pattern that stresses legacy systems to find breaking points",
      "A deployment strategy that runs old and new versions simultaneously"
    ],
    correctOption: 1,
    answer: "Named after strangler fig trees that grow around host trees. Route traffic through a facade (API gateway). Gradually redirect individual features/endpoints from the legacy monolith to new microservices. The old system continues handling unreplaced features. Over time, all traffic moves to new services and the monolith is decommissioned. Low risk because you migrate piece by piece with rollback capability.",
    tips: "Pair with feature flags for gradual rollout. Much safer than a 'big bang' rewrite."
  },
  {
    id: 265, topic: "System Design", difficulty: "easy",
    scenario: "What is a Single Point of Failure (SPOF)?",
    options: [
      "A bug that only occurs once and cannot be reproduced",
      "A component whose failure would cause the entire system to stop working — eliminated through redundancy and failover",
      "A security vulnerability that allows a single attack to compromise the system",
      "A bottleneck that slows down one specific API endpoint"
    ],
    correctOption: 1,
    answer: "A SPOF is any component that, if it fails, brings down the whole system. Examples: single database server, single load balancer, single DNS server. Eliminate SPOFs through: redundancy (multiple instances), replication (master-slave DB), failover (automatic switching), geographic distribution (multi-region), and health checks (detect and replace failed components).",
    tips: "In interviews, always identify SPOFs in your design and explain how you'd mitigate them."
  },
  {
    id: 266, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed key-value store like DynamoDB?",
    options: [
      "Use a single server with a HashMap and replicate via cron jobs",
      "Use consistent hashing for partitioning, quorum reads/writes (W+R > N) for consistency, vector clocks for conflict resolution, and gossip protocol for failure detection",
      "Store key-value pairs in a relational database with an index on the key column",
      "Use a shared filesystem where each file represents a key"
    ],
    correctOption: 1,
    answer: "Key components: (1) Partitioning — consistent hashing with virtual nodes distributes keys across nodes, (2) Replication — each key replicated to N successor nodes on the hash ring, (3) Consistency — configurable quorum (W writes + R reads > N replicas), (4) Conflict resolution — vector clocks detect conflicts, application resolves (or last-write-wins), (5) Failure detection — gossip protocol, (6) Storage engine — LSM-tree (write-optimized) or B-tree, (7) Compaction — merge SSTables periodically.",
    tips: "Discuss the CAP theorem trade-offs: DynamoDB chooses AP (availability + partition tolerance) with tunable consistency."
  },
  {
    id: 267, topic: "System Design", difficulty: "medium",
    scenario: "What is the Bulkhead pattern?",
    options: [
      "A pattern for reinforcing server hardware against physical damage",
      "A pattern that isolates components into pools so that failure in one doesn't cascade to others — like watertight compartments in a ship",
      "A pattern for bulk-inserting data into databases efficiently",
      "A UI pattern for creating header sections in web pages"
    ],
    correctOption: 1,
    answer: "Named after ship bulkheads (watertight compartments). Isolate resources into separate pools: separate thread pools per downstream service, separate connection pools per database, separate circuit breakers per dependency. If Service A's thread pool is exhausted due to a slow dependency, Service B's pool remains unaffected. Implementation: dedicated thread pools (Resilience4j), separate process/container per service, or separate infrastructure per tenant.",
    tips: "Combine with Circuit Breaker and Rate Limiter for a comprehensive resilience strategy. Think of it as blast radius containment."
  },
  {
    id: 268, topic: "System Design", difficulty: "easy",
    scenario: "What is Latency vs Throughput?",
    options: [
      "Latency is download speed; Throughput is upload speed",
      "Latency is the time for a single request to complete; Throughput is the number of requests the system handles per unit of time",
      "Latency only applies to databases; Throughput only applies to networks",
      "They are inverse measurements of the same thing"
    ],
    correctOption: 1,
    answer: "Latency: time from request sent to response received (measured in ms). Low latency = fast responses. Throughput: total operations completed per second (measured in req/s or TPS). High throughput = handles many requests. They're related but independent — a system can have low latency but low throughput (fast but not concurrent), or high throughput but high latency (many concurrent slow requests).",
    tips: "Optimize latency with caching, CDNs, connection pooling. Optimize throughput with horizontal scaling, async processing, batching."
  },
  {
    id: 269, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a news feed system like Twitter/Facebook?",
    options: [
      "Query all followed users' posts in real-time on each page load (fan-out on read)",
      "Two approaches: Fan-out on write (pre-compute feeds for followers when a post is created) for most users, and Fan-out on read for celebrity users with millions of followers — hybrid approach",
      "Store all posts in chronological order and let users scroll through them",
      "Email new posts to all followers"
    ],
    correctOption: 1,
    answer: "Hybrid approach: (1) Fan-out on write — when a user posts, push the post ID to each follower's pre-computed feed cache (Redis list). Fast reads but expensive writes for popular users. (2) Fan-out on read — for celebrities (>1M followers), don't pre-compute. Merge their posts at read time. (3) Feed service — merges pre-computed feed + celebrity posts + ranking algorithm. (4) Ranking — ML model scores posts by relevance, not just chronology. Storage: post content in DB, feed lists in Redis.",
    tips: "Twitter uses fan-out on write for most users. The threshold for 'celebrity mode' is typically ~5K followers. Discuss cache invalidation when posts are deleted."
  },
  {
    id: 270, topic: "System Design", difficulty: "medium",
    scenario: "What is the Sidecar pattern in microservices?",
    options: [
      "A deployment pattern where a secondary team monitors primary services",
      "Deploying a helper container alongside the main service container in the same pod, handling cross-cutting concerns like logging, monitoring, networking, or security",
      "A testing pattern where tests run alongside production code",
      "A pattern for running two versions of a service simultaneously"
    ],
    correctOption: 1,
    answer: "A sidecar is a separate process/container deployed alongside the main application container (same pod in Kubernetes). It handles cross-cutting concerns without modifying app code: service mesh proxy (Envoy/Istio), log collectors (Fluentd), monitoring agents, TLS termination, config management. Benefits: language-agnostic (sidecar works with any app), separation of concerns, independent updates. The main app communicates with sidecar via localhost.",
    tips: "Istio/Envoy service mesh is the most common sidecar example. Each pod gets an Envoy proxy sidecar that handles mTLS, retries, circuit breaking."
  },
  {
    id: 271, topic: "System Design", difficulty: "easy",
    scenario: "What does 'eventual consistency' mean?",
    options: [
      "The system will eventually crash if there are too many writes",
      "After a write, all replicas will eventually converge to the same value — reads may temporarily return stale data but will become consistent over time",
      "Consistency checks happen at the end of each business day",
      "Data is consistent only if you query the primary database directly"
    ],
    correctOption: 1,
    answer: "In an eventually consistent system, after a write, replicas may temporarily return different values, but given enough time (usually milliseconds to seconds) without new updates, all replicas will converge to the same value. Trade-off: higher availability and lower latency vs temporary staleness. Used by: DynamoDB, Cassandra, DNS, CDN caches. Contrast with strong consistency (every read returns the latest write).",
    tips: "Most real-world systems use eventual consistency. Your social media feed being a few seconds stale is acceptable — your bank balance being stale is not."
  },
  {
    id: 272, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed locking service?",
    options: [
      "Use file locks on a shared NFS mount",
      "Use Redis (SETNX with TTL) for simple cases, or ZooKeeper/etcd with ephemeral nodes and fencing tokens for stronger guarantees",
      "Use database row-level locks with SELECT FOR UPDATE",
      "Implement a custom TCP-based locking protocol"
    ],
    correctOption: 1,
    answer: "Simple: Redis SETNX (SET if Not eXists) with TTL — fast but not perfectly safe (clock drift, split-brain). Redlock algorithm across N Redis instances for better safety. Robust: ZooKeeper/etcd — create ephemeral sequential nodes, lowest sequence number holds lock. Fencing tokens: each lock acquisition gets an incrementing token; resources reject operations with older tokens (prevents issues when locks expire while still processing). Key concerns: deadlock prevention (TTL), fairness (FIFO), and split-brain scenarios.",
    tips: "Martin Kleppmann's critique of Redlock is a great discussion point. ZooKeeper provides stronger guarantees but higher latency."
  },
  {
    id: 273, topic: "System Design", difficulty: "medium",
    scenario: "What is a Data Lake vs a Data Warehouse?",
    options: [
      "Data Lake is for big companies; Data Warehouse is for small companies",
      "Data Lake stores raw, unstructured data at scale (schema-on-read); Data Warehouse stores processed, structured data optimized for analytics (schema-on-write)",
      "Data Lake is in the cloud; Data Warehouse is on-premise",
      "They are the same thing with different marketing names"
    ],
    correctOption: 1,
    answer: "Data Lake (S3, HDFS): Stores raw data in any format (JSON, CSV, Parquet, images, logs). Schema applied when reading (schema-on-read). Cheap storage, supports ML/data science. Risk: becomes a 'data swamp' without governance. Data Warehouse (Redshift, BigQuery, Snowflake): Stores cleaned, transformed, structured data. Schema enforced on write. Optimized for SQL analytics and BI dashboards. Modern approach: Lakehouse (Delta Lake, Iceberg) — combines both.",
    tips: "ETL loads into warehouse (Extract, Transform, Load). ELT loads into lake first, then transforms (Extract, Load, Transform)."
  },
  {
    id: 274, topic: "System Design", difficulty: "easy",
    scenario: "What is a Health Check endpoint?",
    options: [
      "An endpoint that monitors employee health records",
      "A dedicated API endpoint (e.g., /health) that returns the service's status — used by load balancers, orchestrators, and monitoring systems to detect unhealthy instances",
      "A security scan endpoint that checks for vulnerabilities",
      "An endpoint that returns the server's CPU and memory usage"
    ],
    correctOption: 1,
    answer: "A simple endpoint (GET /health or /healthz) that returns 200 OK when the service is healthy. Types: Liveness (is the process running?), Readiness (is it ready to serve traffic?), Deep health (checks dependencies — DB, cache, external APIs). Used by: Kubernetes (liveness/readiness probes), load balancers (remove unhealthy instances from pool), monitoring (PagerDuty/Datadog alerts).",
    tips: "Kubernetes uses livenessProbe (restart if failing) and readinessProbe (stop sending traffic if failing). Keep liveness checks lightweight."
  },
  {
    id: 275, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a payment system like Stripe?",
    options: [
      "Call the bank API directly from the frontend for each payment",
      "Build an idempotent payment service with double-entry ledger, state machine for transaction lifecycle, retry with exponential backoff, and reconciliation jobs",
      "Store credit card numbers in a database table and process payments via cron",
      "Use blockchain for all payment transactions"
    ],
    correctOption: 1,
    answer: "Components: (1) Payment API — idempotent (idempotency key prevents double charges), (2) Payment state machine — CREATED → PROCESSING → SUCCEEDED/FAILED, (3) Double-entry ledger — every transaction has a debit and credit entry, (4) Payment processor integration — Stripe/Adyen/bank APIs with retry logic, (5) Webhook handler — receive async payment confirmations, (6) Reconciliation — daily jobs match internal records with bank statements, (7) Fraud detection — ML model scores risk. PCI DSS compliance: never store raw card numbers, use tokenization.",
    tips: "Idempotency is the #1 most important concept. Discuss exactly-once payment processing and how to handle network timeouts."
  },
  {
    id: 276, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between Monolith, SOA, and Microservices?",
    options: [
      "They are three different programming languages",
      "Monolith: single deployable unit; SOA: shared services with ESB; Microservices: small, independently deployable services with decentralized data — each an evolution in managing complexity at scale",
      "Monolith is for backend; SOA is for frontend; Microservices is for mobile",
      "They all mean the same architecture with different names"
    ],
    correctOption: 1,
    answer: "Monolith: All code in one codebase, one deployment. Simple to start, hard to scale teams/features independently. SOA (Service-Oriented Architecture): Services share an Enterprise Service Bus (ESB), shared database, SOAP/XML. Microservices: Small, independently deployable services, each owns its data, communicates via lightweight protocols (REST/gRPC/events). Benefits: independent deployment, team autonomy, tech diversity. Cost: operational complexity, distributed system challenges.",
    tips: "Start monolith, extract microservices when you hit team/scaling pain points. Don't start with microservices for a new project."
  },
  {
    id: 277, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a video streaming platform like YouTube?",
    options: [
      "Store videos as files and serve them directly via HTTP",
      "Transcode uploaded videos into multiple resolutions/codecs, store on object storage, serve via CDN with adaptive bitrate streaming (HLS/DASH), and use a separate metadata service for search/recommendations",
      "Convert all videos to GIFs for faster loading",
      "Stream videos directly from the uploader's device to viewers using P2P"
    ],
    correctOption: 1,
    answer: "Upload pipeline: (1) Upload service accepts video → stores raw in object storage (S3), (2) Transcoding service (distributed workers) encodes into multiple resolutions (1080p, 720p, 480p) and codecs (H.264, VP9), (3) Store transcoded segments + manifest file. Playback: (4) CDN serves video segments from nearest edge, (5) Adaptive bitrate streaming (HLS/DASH) — player switches quality based on bandwidth. Metadata: (6) Video metadata service (title, tags, views) in DB, (7) Search index (Elasticsearch), (8) Recommendation engine. Scale: thumbnail generation, comment service, view counter (approximate counting with Redis).",
    tips: "Discuss DAG-based transcoding pipeline, how live streaming differs (RTMP ingest + low-latency HLS), and copyright detection (Content ID)."
  },
  {
    id: 278, topic: "System Design", difficulty: "medium",
    scenario: "What is Back Pressure in distributed systems?",
    options: [
      "Physical pressure on server hardware from high temperatures",
      "A mechanism where a slow consumer signals the producer to slow down, preventing overwhelm — applied through bounded queues, rate limiting, or flow control",
      "The network latency caused by data traveling long distances",
      "Compression applied to data before sending it over the network"
    ],
    correctOption: 1,
    answer: "When a consumer can't keep up with the producer's rate, back pressure prevents the system from being overwhelmed. Strategies: (1) Bounded queues — reject/block when full, (2) Rate limiting — producer respects consumer's capacity, (3) Load shedding — drop low-priority messages, (4) Reactive Streams — consumer signals demand (request N items). Without back pressure: memory exhaustion, cascading failures, data loss. Examples: TCP flow control, Kafka consumer lag alerts, RxJava/Project Reactor.",
    tips: "Unbounded queues are a common anti-pattern — they just delay the crash. Always use bounded queues with a back pressure strategy."
  },
  {
    id: 279, topic: "System Design", difficulty: "easy",
    scenario: "What is the difference between Stateful and Stateless services?",
    options: [
      "Stateful services are written in typed languages; Stateless in dynamic languages",
      "Stateless services don't store client session data between requests (each request is independent); Stateful services maintain client state across requests",
      "Stateful services are faster because they remember previous results",
      "Stateless services cannot use databases"
    ],
    correctOption: 1,
    answer: "Stateless: Each request contains all information needed to process it. No server-side session state. Any instance can handle any request → easy to scale horizontally. Examples: REST APIs, Lambda functions. Stateful: Server remembers client context between requests (session, WebSocket connection, in-memory cache). Requires sticky sessions or session replication. Examples: WebSocket servers, game servers, databases.",
    tips: "Design stateless wherever possible. Store state externally (Redis, DB) so any instance can serve any request."
  },
  {
    id: 280, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a ride-sharing matching system like Uber?",
    options: [
      "Assign the nearest driver using SQL ORDER BY distance LIMIT 1",
      "Use a geospatial index (Geohash/S2/H3) to find nearby drivers, a matching service that optimizes for ETA/distance/driver rating, and real-time location updates via WebSocket",
      "Let drivers browse available ride requests and pick the ones they want",
      "Use a round-robin algorithm to distribute rides evenly among all drivers"
    ],
    correctOption: 1,
    answer: "Components: (1) Location service — drivers send GPS every 3-5s via WebSocket, stored in Redis with geospatial index (GEOADD/GEOSEARCH), (2) Matching service — when rider requests, query nearby available drivers (Geohash/S2 cells), rank by ETA + rating + direction of travel, send ride offer, (3) Dispatch — if driver declines, offer to next candidate (with timeout), (4) Trip service — manages trip lifecycle (matching → pickup → in-progress → completed), (5) Pricing service — surge pricing based on demand/supply ratio per zone, (6) ETA service — uses road network graph (Dijkstra/A*) with real-time traffic. Scale: partition by city/region.",
    tips: "Discuss the supply/demand balance problem, how surge pricing is calculated (hex grid demand/supply ratio), and handling driver location staleness."
  },
  {
    id: 281, topic: "System Design", difficulty: "medium",
    scenario: "What is a Service Mesh?",
    options: [
      "A network of microservices connected in a mesh topology",
      "A dedicated infrastructure layer (sidecar proxies) that handles service-to-service communication — providing mTLS, load balancing, retries, observability, and traffic management without changing application code",
      "A monitoring dashboard that visualizes service dependencies",
      "A deployment tool for orchestrating microservice rollouts"
    ],
    correctOption: 1,
    answer: "A service mesh adds a sidecar proxy (e.g., Envoy) next to each service. The proxies form the 'data plane' handling all inter-service traffic. A 'control plane' (Istio, Linkerd) configures the proxies. Features: mTLS (encrypted service-to-service communication), load balancing, circuit breaking, retries, timeouts, traffic splitting (canary deployments), distributed tracing, and access policies. All without modifying application code.",
    tips: "Adds latency (extra network hop through proxy) and operational complexity. Best for large microservice deployments (50+ services)."
  },
  {
    id: 282, topic: "System Design", difficulty: "easy",
    scenario: "What is Idempotency and why does it matter in APIs?",
    options: [
      "A security measure that prevents SQL injection",
      "Making the same request multiple times produces the same result — critical for safe retries in distributed systems where network failures can cause duplicate requests",
      "A performance optimization that caches API responses",
      "A testing strategy that verifies APIs return identical responses"
    ],
    correctOption: 1,
    answer: "An idempotent operation produces the same result regardless of how many times it's called. GET, PUT, DELETE are naturally idempotent. POST is not (creates duplicate resources). For non-idempotent operations, use an idempotency key: client sends a unique ID with each request, server checks if it's already processed. Essential because: network timeouts may cause retries, message queues may deliver duplicates, users may double-click submit.",
    tips: "Stripe uses 'Idempotency-Key' header. Implement with: store idempotency key + response in Redis with TTL, return cached response for duplicate keys."
  },
  {
    id: 283, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a content moderation system at scale?",
    options: [
      "Hire enough moderators to review every piece of content manually",
      "Use a multi-layer pipeline: automated ML filters (text/image/video classification) for fast detection, confidence-based routing to human review queues, feedback loops to retrain models, and an appeals process",
      "Block all user-generated content until manually approved",
      "Use keyword blacklists to filter harmful content"
    ],
    correctOption: 1,
    answer: "Pipeline: (1) Pre-upload — client-side hash check against known bad content (PhotoDNA), (2) Automated ML — text classification (toxicity models), image classification (NSFW, violence), video frame sampling, (3) Confidence routing — high confidence → auto-action, low confidence → human review queue, (4) Human review — prioritized queues (severity-based), moderator tools with context, (5) Appeals — separate review team, (6) Feedback loop — human decisions retrain ML models. Scale: process millions of items/day, most handled automatically, humans review ~1-5%.",
    tips: "Discuss moderator well-being (rotation, counseling), false positive rates, cultural context challenges, and legal requirements (CSAM reporting)."
  },
  {
    id: 284, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between gRPC and REST?",
    options: [
      "gRPC is Google's proprietary REST implementation",
      "REST uses HTTP/1.1 + JSON with resource-based URLs; gRPC uses HTTP/2 + Protocol Buffers with RPC-style calls — gRPC is faster but less human-readable",
      "REST is for external APIs; gRPC is only for internal communication",
      "gRPC doesn't support streaming; REST does"
    ],
    correctOption: 1,
    answer: "REST: HTTP/1.1, JSON (text-based, human-readable), resource-oriented (GET /users/123), widely supported, great for public APIs. gRPC: HTTP/2 (multiplexed, binary framing), Protocol Buffers (binary serialization, smaller payload, schema-enforced), RPC-style (userService.GetUser(id)), supports streaming (unary, server, client, bidirectional). gRPC is 2-10x faster due to binary format + HTTP/2. Use REST for public APIs, gRPC for internal service-to-service communication.",
    tips: "gRPC requires .proto files (contract-first). REST is more flexible but lacks strict contracts (unless using OpenAPI). gRPC-Web bridges gRPC to browsers."
  },
  {
    id: 285, topic: "System Design", difficulty: "easy",
    scenario: "What is Database Replication?",
    options: [
      "Copying a database schema to a different database engine",
      "Maintaining copies of the same data on multiple servers for high availability, read scaling, and disaster recovery",
      "Backing up a database to tape storage weekly",
      "Running the same query on multiple databases simultaneously"
    ],
    correctOption: 1,
    answer: "Replication copies data across multiple database servers. Types: Master-Slave (single writer, multiple readers), Master-Master (multiple writers, conflict resolution needed), Synchronous (write confirmed after all replicas updated — strong consistency, higher latency), Asynchronous (write confirmed after primary, replicas catch up — eventual consistency, lower latency). Benefits: high availability (failover), read scaling (distribute read load), geographic distribution (lower latency for global users).",
    tips: "Discuss replication lag (stale reads from replicas) and failover strategies (manual vs automatic promotion of replica to primary)."
  },
  {
    id: 286, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a recommendation engine like Netflix/Amazon?",
    options: [
      "Show the most popular items to everyone",
      "Use collaborative filtering (users who liked X also liked Y), content-based filtering (similar attributes), and a hybrid approach with ML models that personalize rankings in real-time",
      "Let users manually tag their preferences and filter accordingly",
      "Randomly suggest items to increase discovery"
    ],
    correctOption: 1,
    answer: "Approaches: (1) Collaborative filtering — user-based (find similar users, recommend their items) or item-based (find similar items to what user liked), (2) Content-based — recommend items with similar attributes (genre, director, ingredients), (3) Hybrid — combine both with ML. Architecture: offline pipeline (batch compute embeddings/similarity matrices on Spark), online service (real-time ranking using user context — time, device, recent activity), A/B testing framework. Models: matrix factorization, deep learning (two-tower model), contextual bandits for exploration vs exploitation.",
    tips: "Discuss the cold start problem (new users/items with no data) and how to solve it (popularity baseline, ask preferences, content-based fallback)."
  },
  {
    id: 287, topic: "System Design", difficulty: "medium",
    scenario: "What is the 12-Factor App methodology?",
    options: [
      "An app must have exactly 12 microservices to be production-ready",
      "A set of 12 best practices for building scalable, maintainable cloud-native applications — covering codebase, dependencies, config, backing services, build/release/run, processes, port binding, concurrency, disposability, dev/prod parity, logs, and admin processes",
      "A security framework with 12 compliance checkpoints",
      "A database design methodology with 12 normalization rules"
    ],
    correctOption: 1,
    answer: "The 12 factors: (1) Codebase — one repo per app, (2) Dependencies — explicitly declare and isolate, (3) Config — store in environment variables, (4) Backing services — treat as attached resources, (5) Build/Release/Run — strict separation, (6) Processes — stateless, share-nothing, (7) Port binding — export services via port, (8) Concurrency — scale via process model, (9) Disposability — fast startup, graceful shutdown, (10) Dev/prod parity — keep environments similar, (11) Logs — treat as event streams, (12) Admin processes — run as one-off tasks.",
    tips: "Created by Heroku founders. Still the gold standard for cloud-native app design. Kubernetes naturally enforces many of these."
  },
  {
    id: 288, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a global-scale CDN?",
    options: [
      "Place one large server in each continent",
      "Deploy edge servers in hundreds of PoPs worldwide, use anycast routing for nearest-server selection, implement tiered caching (edge → regional → origin), and use consistent hashing for cache distribution",
      "Use DNS round-robin to distribute traffic globally",
      "Mirror the entire origin server's content to every edge location"
    ],
    correctOption: 1,
    answer: "Architecture: (1) PoPs (Points of Presence) — edge servers in 200+ locations worldwide, (2) Anycast — same IP address advertised from all PoPs, BGP routes users to nearest PoP, (3) Tiered caching — L1 (edge, small, fast) → L2 (regional, larger) → Origin shield (single point to origin, reduces origin load), (4) Cache key — URL + headers (Vary), consistent hashing across servers in a PoP, (5) Purge system — invalidate cached content globally in seconds, (6) TLS termination at edge — reduce round trips. Optimizations: Brotli compression, HTTP/2 push, image optimization, edge compute (Cloudflare Workers).",
    tips: "Discuss cache hit ratio optimization (>95% target), stale-while-revalidate, and how edge compute moves logic closer to users."
  },
  {
    id: 289, topic: "System Design", difficulty: "medium",
    scenario: "What is Blue-Green Deployment?",
    options: [
      "A color-coded monitoring system for service health",
      "Running two identical production environments (Blue and Green) — deploy new version to the idle environment, test it, then switch traffic from the active to the new environment for zero-downtime releases",
      "A deployment strategy where blue team deploys to staging and green team deploys to production",
      "Using green energy-efficient servers for production workloads"
    ],
    correctOption: 1,
    answer: "Two identical environments: Blue (current production) and Green (idle). Deploy new version to Green, run smoke tests. Switch traffic (via load balancer/DNS) from Blue to Green. If issues arise, instant rollback by switching back to Blue. Benefits: zero downtime, easy rollback, full environment testing. Related strategies: Canary (gradually shift traffic %), Rolling (update instances one by one), A/B testing (different versions for different user segments).",
    tips: "Requires double the infrastructure (cost). Discuss database migration challenges — both versions must be compatible with the schema."
  },
  {
    id: 290, topic: "System Design", difficulty: "easy",
    scenario: "What is DNS and how does it work?",
    options: [
      "A protocol for encrypting network traffic",
      "The Domain Name System translates human-readable domain names (google.com) to IP addresses (142.250.80.46) through a hierarchical resolution process",
      "A database that stores website content",
      "A firewall that filters domains based on security policies"
    ],
    correctOption: 1,
    answer: "DNS resolution: (1) Browser checks local cache, (2) OS checks /etc/hosts + system cache, (3) Recursive resolver (ISP/8.8.8.8) checks its cache, (4) Root nameserver → points to TLD server (.com), (5) TLD server → points to authoritative nameserver (google.com's NS), (6) Authoritative NS returns the IP address. Record types: A (IPv4), AAAA (IPv6), CNAME (alias), MX (mail), TXT (verification), NS (nameserver). TTL controls cache duration.",
    tips: "DNS is often overlooked in system design but it's critical — it's a global distributed key-value store. Discuss DNS-based load balancing and failover."
  },
  {
    id: 291, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed tracing system like Jaeger?",
    options: [
      "Add print statements to every function and grep the logs",
      "Assign each request a unique trace ID, propagate it through all services via headers, collect spans (timing data) at each service, and aggregate into a trace timeline for debugging latency and failures",
      "Use a centralized log file that all services write to",
      "Monitor CPU usage of each service to identify bottlenecks"
    ],
    correctOption: 1,
    answer: "Components: (1) Instrumentation — SDK in each service creates spans (operation name, start/end time, tags, parent span ID), (2) Context propagation — trace ID + span ID passed via HTTP headers (traceparent) or gRPC metadata, (3) Collection — agents on each host batch and send spans to collector (Kafka for buffering), (4) Storage — Elasticsearch/Cassandra for span data, (5) Query/UI — reconstruct full trace timeline, show service dependency graph, identify slow spans. Standards: OpenTelemetry (merged OpenTracing + OpenCensus). Sampling: collect 1-10% of traces in production to control costs.",
    tips: "Discuss the three pillars of observability: logs (what happened), metrics (aggregated measurements), traces (request flow across services)."
  },
  {
    id: 292, topic: "System Design", difficulty: "medium",
    scenario: "What is the CAP theorem's PACELC extension?",
    options: [
      "An updated version that adds Performance, Availability, Cost, Efficiency, Latency, and Consistency",
      "If Partitioned: choose Availability or Consistency. Else (normal operation): choose Latency or Consistency — acknowledging that trade-offs exist even without network partitions",
      "A consensus protocol that extends Paxos with additional safety guarantees",
      "A benchmarking framework for evaluating distributed databases"
    ],
    correctOption: 1,
    answer: "PACELC: if there's a Partition (P), choose Availability (A) or Consistency (C). Else (E, normal operation), choose Latency (L) or Consistency (C). This addresses CAP's limitation — CAP only discusses partition scenarios, but trade-offs exist in normal operation too. DynamoDB: PA/EL (available during partition, low latency normally). PostgreSQL: PC/EC (consistent always, higher latency). Cassandra: PA/EL (tunable). MongoDB: PA/EC (available during partition, consistent normally).",
    tips: "PACELC gives a more complete picture than CAP alone. Use it to compare database choices in system design interviews."
  },
  {
    id: 293, topic: "System Design", difficulty: "easy",
    scenario: "What is Horizontal Pod Autoscaling in Kubernetes?",
    options: [
      "Manually adding more pods when traffic increases",
      "Automatically scaling the number of pod replicas up or down based on observed metrics like CPU usage, memory, or custom metrics",
      "Increasing the CPU/memory limits of existing pods",
      "Distributing pods horizontally across multiple nodes"
    ],
    correctOption: 1,
    answer: "HPA automatically adjusts the replica count of a Deployment/ReplicaSet based on metrics. Default: CPU utilization target (e.g., scale up when avg CPU > 70%). Also supports: memory, custom metrics (requests per second, queue depth), external metrics (CloudWatch). Control loop runs every 15s. Scale-up is fast; scale-down has a stabilization window (5 min default) to prevent flapping. Combine with Cluster Autoscaler (adds/removes nodes) for full elastic scaling.",
    tips: "VPA (Vertical Pod Autoscaler) adjusts pod resource requests/limits instead. Use HPA for traffic-driven scaling, VPA for right-sizing."
  },
  {
    id: 294, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a search engine's indexing system?",
    options: [
      "Store all web pages in a single database table and use SQL LIKE queries",
      "Build an inverted index that maps every word to the list of documents containing it, with TF-IDF/BM25 scoring for relevance ranking, stored in a distributed system for parallel query processing",
      "Use regular expressions to search through raw HTML files",
      "Create a separate database for each website"
    ],
    correctOption: 1,
    answer: "Indexing pipeline: (1) Crawler fetches web pages, (2) Parser extracts text, strips HTML, (3) Tokenizer breaks text into terms (lowercase, stemming, stop word removal), (4) Inverted index — map each term to a posting list (docID, term frequency, positions), (5) Store index in distributed system (sharded by term or document), (6) Ranking — BM25 (term frequency, inverse document frequency, document length) + PageRank (link analysis) + ML features. Query processing: parse query → look up terms in index → intersect posting lists → score and rank → return top results.",
    tips: "Discuss how to handle real-time indexing (new/updated pages), phrase queries (positional index), and how Google uses BERT for semantic understanding."
  },
  {
    id: 295, topic: "System Design", difficulty: "medium",
    scenario: "What is the Outbox pattern for reliable event publishing?",
    options: [
      "Storing outbound emails in an outbox folder before sending",
      "Writing events to an outbox table in the same database transaction as the business data, then a separate process publishes events from the outbox to the message broker — ensuring atomicity",
      "A pattern for queuing outbound API calls when external services are down",
      "Storing failed events in a dead letter queue for retry"
    ],
    correctOption: 1,
    answer: "Problem: When a service updates its DB and publishes an event, either could fail independently (DB succeeds but event publish fails, or vice versa). Solution: Write the event to an 'outbox' table in the same DB transaction as the business data. A separate process (polling or CDC — Change Data Capture via Debezium) reads the outbox and publishes to the message broker (Kafka). The event is deleted/marked after successful publish. Guarantees: event is published if and only if the business data was committed.",
    tips: "Debezium + CDC (reading DB transaction log) is more efficient than polling. This pattern is essential for microservices with eventual consistency."
  },
  {
    id: 296, topic: "System Design", difficulty: "easy",
    scenario: "What is Rate Limiting and why is it important?",
    options: [
      "Limiting the rate at which data is written to disk",
      "Controlling the number of requests a client can make to an API within a time window — preventing abuse, protecting resources, and ensuring fair usage",
      "Limiting the data transfer rate between servers",
      "A pricing strategy that charges based on API usage"
    ],
    correctOption: 1,
    answer: "Rate limiting restricts how many requests a client can make in a given time period. Why: prevent DDoS attacks, stop abusive bots, protect expensive operations, ensure fair access, control costs. Implementation: per-IP, per-user, per-API-key. Response: HTTP 429 Too Many Requests with Retry-After header. Where: API gateway, middleware, or application layer. Headers: X-RateLimit-Limit, X-RateLimit-Remaining, X-RateLimit-Reset.",
    tips: "Differentiate between throttling (slow down) and rate limiting (reject). Use tiered limits: free tier (100/day), paid (10,000/day)."
  },
  {
    id: 297, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a multi-tenant SaaS architecture?",
    options: [
      "Deploy a separate application instance for each customer",
      "Use a shared infrastructure with tenant isolation at the data layer (shared DB with tenant_id, schema-per-tenant, or DB-per-tenant), configurable per-tenant features, and resource quotas",
      "Let all tenants share everything with no isolation",
      "Use a different cloud provider for each tenant"
    ],
    correctOption: 1,
    answer: "Data isolation models: (1) Shared DB, shared schema (tenant_id column on every table) — cheapest, hardest to isolate, (2) Shared DB, separate schemas — moderate isolation, (3) Separate DB per tenant — strongest isolation, most expensive. Compute: shared services with tenant context in JWT/headers. Features: tenant-specific config (feature flags, branding, limits), resource quotas (rate limiting per tenant), noisy neighbor prevention (fair scheduling). Security: row-level security in DB, tenant context in every query, audit logging per tenant.",
    tips: "Start with shared DB + tenant_id (simplest). Move large tenants to dedicated DBs as needed. Always include tenant_id in every DB query to prevent data leaks."
  },
  {
    id: 298, topic: "System Design", difficulty: "medium",
    scenario: "What is Graceful Degradation vs Fail Fast?",
    options: [
      "Graceful degradation is for frontend; Fail fast is for backend",
      "Graceful degradation maintains reduced functionality when components fail (show cached data, disable non-critical features); Fail fast immediately reports errors to callers instead of waiting/retrying — both are valid strategies for different scenarios",
      "Graceful degradation means slow shutdown; Fail fast means instant restart",
      "They are opposite names for the same error handling strategy"
    ],
    correctOption: 1,
    answer: "Graceful degradation: When a dependency fails, provide reduced but functional service. Examples: show cached data when DB is down, disable recommendations but keep browsing working, serve static pages when app servers fail. Fail fast: Immediately return an error instead of waiting for a timeout. Examples: circuit breaker in Open state returns instantly, validation fails before expensive processing. When to use: degrade for user-facing features, fail fast for internal services to prevent resource exhaustion.",
    tips: "Netflix is the gold standard for graceful degradation — their services have fallbacks for every dependency. Fail fast prevents cascading slowdowns."
  },
  {
    id: 299, topic: "System Design", difficulty: "easy",
    scenario: "What is Webhook vs Polling?",
    options: [
      "Webhook is for sending data; Polling is for receiving data",
      "Polling: client repeatedly asks the server for updates at intervals; Webhook: server pushes updates to the client's URL when events occur — webhooks are more efficient for event-driven scenarios",
      "Webhooks are more secure than polling",
      "Polling works in real-time; Webhooks have delays"
    ],
    correctOption: 1,
    answer: "Polling: Client sends requests at intervals (e.g., every 5 seconds) to check for updates. Simple but wastes resources when there are no updates (empty responses). Webhook: Client registers a callback URL. Server sends an HTTP POST to that URL when an event occurs. Efficient (no wasted requests) but requires the client to expose an endpoint. Used by: Stripe (payment events), GitHub (push events), Slack (bot events). Best practice: use webhooks with a polling fallback for reliability.",
    tips: "Webhooks need idempotency handling (server may retry), signature verification (HMAC), and a retry/dead-letter mechanism."
  },
  {
    id: 300, topic: "System Design", difficulty: "hard",
    scenario: "How would you design an online collaborative editor like Google Docs?",
    options: [
      "Lock the document so only one user can edit at a time",
      "Use Operational Transformation (OT) or CRDTs to handle concurrent edits, with a collaboration server that broadcasts changes in real-time via WebSocket, and conflict-free merging of simultaneous edits",
      "Save the document every 5 seconds and let the last save win",
      "Give each user a copy and merge manually when they're done"
    ],
    correctOption: 1,
    answer: "Two main approaches: (1) Operational Transformation (OT) — transform operations against concurrent operations so they converge. Used by Google Docs. Server acts as central authority for operation ordering. (2) CRDTs (Conflict-free Replicated Data Types) — data structures that mathematically guarantee convergence without central coordination. Used by Figma. Architecture: WebSocket connection per user, changes broadcast to all editors, server persists operation log, client applies remote operations to local state. Features: cursor presence, undo/redo per user, version history (snapshots), offline editing (queue operations, sync on reconnect).",
    tips: "OT is simpler but requires a central server. CRDTs are more complex but work in P2P/offline scenarios. Discuss Yjs (CRDT library) as a practical implementation."
  },

  // --- SYSTEM DESIGN (301-415) ---
  {
    id: 301, topic: "System Design", difficulty: "medium",
    scenario: "What is the Two-Phase Commit (2PC) protocol?",
    options: [
      "A deployment strategy with two stages: staging and production",
      "A distributed transaction protocol where a coordinator asks all participants to prepare (vote), then if all agree, commits — ensuring atomicity across multiple databases",
      "A code review process requiring two approvals before merge",
      "A two-step authentication process for database access"
    ],
    correctOption: 1,
    answer: "Phase 1 (Prepare): Coordinator asks all participants 'Can you commit?' Each participant writes to WAL and responds YES/NO. Phase 2 (Commit/Abort): If all say YES, coordinator sends COMMIT. If any says NO, coordinator sends ABORT. Guarantees atomicity across distributed resources. Drawbacks: blocking (participants hold locks until coordinator responds), single point of failure (coordinator crash), high latency. Alternatives: Saga pattern, eventual consistency.",
    tips: "2PC is rarely used in microservices due to its blocking nature. Prefer Sagas for long-running distributed transactions."
  },
  {
    id: 302, topic: "System Design", difficulty: "easy",
    scenario: "What is a Write-Ahead Log (WAL)?",
    options: [
      "A log file where developers write down planned changes before implementing them",
      "A technique where all modifications are written to a sequential log before being applied to the actual data structures — ensuring durability and crash recovery",
      "A logging framework that writes logs before the application starts",
      "A version control system for database schemas"
    ],
    correctOption: 1,
    answer: "Before modifying data on disk, the change is first written to a sequential append-only log. If the system crashes mid-operation, the WAL can be replayed to restore the correct state. Used by: PostgreSQL, MySQL (redo log), Kafka (commit log), etcd. Benefits: durability (data survives crashes), sequential writes are fast (no random I/O), enables replication (ship WAL to replicas).",
    tips: "WAL is fundamental to ACID databases. Kafka's entire storage model is essentially a distributed WAL."
  },
  {
    id: 303, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time fraud detection system?",
    options: [
      "Review all transactions manually at the end of each day",
      "Use a streaming pipeline (Kafka + Flink) that evaluates transactions in real-time against rule engines and ML models, scoring risk within milliseconds before approving/declining",
      "Block all transactions over $1000 automatically",
      "Compare each transaction against a static blacklist of known fraud patterns"
    ],
    correctOption: 1,
    answer: "Pipeline: (1) Event ingestion — Kafka receives transaction events, (2) Feature enrichment — enrich with user history, device fingerprint, geo-location, merchant category, (3) Rule engine — velocity checks (5 txns in 1 min), geo-impossibility (London then Tokyo in 30 min), amount thresholds, (4) ML model — real-time scoring (gradient boosted trees or neural network), (5) Decision — approve/decline/review based on risk score, (6) Feedback loop — confirmed fraud labels retrain models. Requirements: <100ms latency, <0.1% false positive rate, handle millions of txns/day.",
    tips: "Discuss the tension between false positives (annoying customers) and false negatives (letting fraud through). Mention feature stores for real-time ML serving."
  },
  {
    id: 304, topic: "System Design", difficulty: "medium",
    scenario: "What is the Ambassador pattern?",
    options: [
      "A diplomatic protocol for inter-company API communication",
      "A helper service that handles cross-cutting network concerns (retries, circuit breaking, monitoring) on behalf of the main application — acting as an out-of-process proxy",
      "A design pattern for representing external APIs with local interfaces",
      "A UI pattern for onboarding new users"
    ],
    correctOption: 1,
    answer: "The Ambassador pattern deploys a proxy alongside the application that handles network-related concerns: retries with backoff, circuit breaking, TLS termination, logging, monitoring, and routing. Similar to Sidecar pattern but specifically focused on outbound communication. The app talks to localhost, the ambassador handles the complex networking. Used when you can't modify the application code (legacy apps) or want language-agnostic networking.",
    tips: "In Kubernetes, this is often an Envoy sidecar. The difference from Sidecar: Ambassador focuses on outbound requests, Sidecar is more general-purpose."
  },
  {
    id: 305, topic: "System Design", difficulty: "easy",
    scenario: "What is the difference between TCP and UDP?",
    options: [
      "TCP is for web; UDP is for databases",
      "TCP provides reliable, ordered delivery with connection setup and error checking; UDP provides fast, connectionless delivery with no guarantees — choose based on reliability vs speed needs",
      "UDP is a newer, faster version of TCP",
      "TCP works over the internet; UDP works only on local networks"
    ],
    correctOption: 1,
    answer: "TCP: Connection-oriented (3-way handshake), reliable (acknowledgments + retransmission), ordered delivery, flow control, congestion control. Used for: HTTP, SSH, email, file transfer. UDP: Connectionless, no delivery guarantee, no ordering, no flow control, minimal overhead. Used for: DNS, video streaming, gaming, VoIP, IoT. UDP is faster (no handshake, no ack overhead) but unreliable. Some protocols build reliability on top of UDP (QUIC, WebRTC).",
    tips: "HTTP/3 uses QUIC (built on UDP) for faster connection setup. Video calls use UDP because a dropped frame is better than a delayed one."
  },
  {
    id: 306, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed configuration management system like etcd?",
    options: [
      "Store configuration in environment variables on each server",
      "Use a replicated key-value store with Raft consensus for strong consistency, watch mechanism for real-time change notifications, and hierarchical keys with TTL support",
      "Use a shared NFS drive with JSON config files",
      "Hardcode configuration values and redeploy on changes"
    ],
    correctOption: 1,
    answer: "Components: (1) Raft consensus — leader election and log replication for strong consistency across nodes (majority quorum for writes), (2) Key-value store — hierarchical keys (/app/db/host), versioned values, TTL/lease support, (3) Watch API — clients subscribe to key changes, server pushes notifications (long-polling or streaming), (4) Authentication — TLS + RBAC for access control, (5) Snapshotting — periodic state snapshots to prevent unbounded log growth. Used by Kubernetes (stores all cluster state in etcd), service discovery, feature flags, distributed locks.",
    tips: "etcd is designed for small, critical data (config, metadata) — not large datasets. Discuss linearizable reads vs serializable reads trade-off."
  },
  {
    id: 307, topic: "System Design", difficulty: "medium",
    scenario: "What is the Competing Consumers pattern?",
    options: [
      "Multiple companies competing to build the same product",
      "Multiple consumer instances reading from the same message queue, each processing different messages in parallel — enabling horizontal scaling of message processing",
      "A pattern where consumers bid for the right to process a message",
      "A load testing pattern that simulates competing user requests"
    ],
    correctOption: 1,
    answer: "Multiple consumer instances (workers) subscribe to the same queue. The message broker delivers each message to exactly one consumer (point-to-point). Benefits: horizontal scaling (add more consumers to handle more messages), resilience (if one consumer dies, others continue), load leveling (consumers process at their own pace). Requirements: messages must be independent (no ordering dependency), idempotent processing (broker may redeliver on timeout). Examples: SQS consumers, Kafka consumer group partitions.",
    tips: "Kafka achieves this via consumer groups — each partition is assigned to one consumer in the group. More partitions = more parallelism."
  },
  {
    id: 308, topic: "System Design", difficulty: "easy",
    scenario: "What is SSL/TLS and how does the handshake work?",
    options: [
      "A compression protocol that reduces data transfer size",
      "A security protocol that provides encrypted communication between client and server — the handshake establishes trust (certificates), agrees on encryption algorithms, and exchanges keys",
      "A load balancing algorithm that distributes SSL traffic",
      "A firewall protocol that filters encrypted traffic"
    ],
    correctOption: 1,
    answer: "TLS handshake (simplified): (1) Client Hello — supported cipher suites and TLS version, (2) Server Hello — chosen cipher suite + server certificate (contains public key, signed by CA), (3) Client verifies certificate chain against trusted CAs, (4) Key exchange — client and server agree on a shared secret (Diffie-Hellman or RSA), (5) Both derive symmetric session keys from the shared secret, (6) Encrypted communication begins. TLS 1.3 reduced this to 1 round trip (vs 2 in TLS 1.2).",
    tips: "mTLS (mutual TLS) — both client AND server present certificates. Used in service meshes (Istio) for zero-trust service-to-service auth."
  },
  {
    id: 309, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a time-series database like InfluxDB or Prometheus?",
    options: [
      "Use a regular relational database with a timestamp column",
      "Optimize for append-heavy writes with time-partitioned storage, columnar compression for metric values, downsampling for old data, and efficient range queries over time windows",
      "Store each data point as a separate file on disk",
      "Use an in-memory cache and flush to disk daily"
    ],
    correctOption: 1,
    answer: "Optimizations: (1) Write path — append-only, batched writes, WAL for durability, in-memory buffer before flush, (2) Storage — time-partitioned chunks (e.g., 2-hour blocks), columnar format for high compression (delta encoding for timestamps, XOR for float values), (3) Compaction — merge small chunks into larger ones, (4) Retention — auto-delete old data based on policy, (5) Downsampling — aggregate old data (1s → 1min → 1hour), (6) Query — efficient range scans over time windows, aggregation functions (avg, max, percentile). Index by metric name + labels, not by time.",
    tips: "Prometheus uses a local TSDB with pull-based scraping. InfluxDB uses push-based ingestion. Discuss cardinality explosion (too many unique label combinations)."
  },
  {
    id: 310, topic: "System Design", difficulty: "medium",
    scenario: "What is the Retry pattern with Exponential Backoff?",
    options: [
      "Retrying failed requests at fixed intervals until they succeed",
      "Retrying failed requests with increasing wait times between attempts (1s, 2s, 4s, 8s...) plus random jitter — preventing thundering herd while giving transient failures time to resolve",
      "Exponentially increasing the request payload size on each retry",
      "Backing off from retries exponentially until giving up permanently"
    ],
    correctOption: 1,
    answer: "On failure, wait progressively longer before retrying: delay = base * 2^attempt (e.g., 1s, 2s, 4s, 8s). Add random jitter (±25%) to prevent all clients retrying simultaneously (thundering herd). Set a max retry count (3-5) and max delay cap (30s). Only retry on transient errors (503, 429, timeout) — not permanent ones (400, 401, 404). Combined with circuit breaker: stop retrying entirely when failure rate is too high.",
    tips: "AWS SDKs use exponential backoff with full jitter by default. Decorrelated jitter (delay = random(base, prev_delay * 3)) often performs better than equal jitter."
  },
  {
    id: 311, topic: "System Design", difficulty: "easy",
    scenario: "What is an LSM-Tree storage engine?",
    options: [
      "A tree structure for organizing Linux system mounts",
      "Log-Structured Merge-Tree — writes go to an in-memory buffer (memtable), which flushes to sorted disk files (SSTables) and periodically merges them — optimized for high write throughput",
      "A binary tree that balances itself logarithmically",
      "A file system tree used by NFS for large-scale storage"
    ],
    correctOption: 1,
    answer: "Write path: (1) Write to WAL (durability), (2) Insert into in-memory sorted structure (memtable — usually a red-black tree or skip list), (3) When memtable is full, flush to disk as immutable SSTable (Sorted String Table). Read path: Check memtable first, then SSTables from newest to oldest (use Bloom filters to skip SSTables that don't contain the key). Compaction: periodically merge SSTables to reduce read amplification. Used by: Cassandra, RocksDB, LevelDB, HBase.",
    tips: "LSM is write-optimized (sequential writes). B-Tree is read-optimized (in-place updates). Most NoSQL databases use LSM-Trees."
  },
  {
    id: 312, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a location-based service like 'Find Nearby Restaurants'?",
    options: [
      "Calculate the distance from the user to every restaurant in the database",
      "Use geospatial indexing (Geohash, Quadtree, or S2 cells) to partition the map into grid cells, index businesses by cell, and query neighboring cells for nearby results",
      "Store restaurant coordinates as strings and use LIKE queries to match",
      "Pre-compute all possible restaurant pairs and store distances in a lookup table"
    ],
    correctOption: 1,
    answer: "Geospatial indexing: (1) Geohash — encode lat/lng into a string prefix; nearby locations share prefixes. Query: find all businesses with geohash prefix matching user's cell + adjacent cells, (2) Quadtree — recursively divide map into 4 quadrants; leaf nodes contain businesses. Good for non-uniform distribution, (3) S2/H3 — hierarchical cell systems with better edge-case handling than geohash. Architecture: business DB with geo-index, read replicas for query scaling, caching hot areas (city centers), search service combining geo-proximity + filters (cuisine, rating, hours).",
    tips: "Geohash is simplest (supported natively by Redis GEOADD, Elasticsearch). Discuss the edge problem — nearby locations can have very different geohash prefixes at cell boundaries."
  },
  {
    id: 313, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between Push and Pull architectures in monitoring?",
    options: [
      "Push sends alerts to you; Pull requires you to check dashboards",
      "Push: services send metrics to a central collector (StatsD, InfluxDB); Pull: a central system scrapes metrics from service endpoints (Prometheus) — each has trade-offs in service discovery, firewall friendliness, and control",
      "Push is real-time; Pull is batch-only",
      "Push is for logs; Pull is for metrics"
    ],
    correctOption: 1,
    answer: "Push (Graphite, DataDog, InfluxDB): Services actively send metrics to collector. Pros: works behind firewalls, supports event-driven metrics, easy for short-lived jobs. Cons: collector can be overwhelmed, harder to tell if a service is down vs not sending. Pull (Prometheus): Central system scrapes /metrics endpoints at intervals. Pros: central control of scrape frequency, easy to detect down services (scrape fails), simpler service code. Cons: requires service discovery, doesn't work well behind NAT/firewalls. Hybrid: Prometheus uses pushgateway for short-lived jobs.",
    tips: "Prometheus (pull) dominates in Kubernetes. DataDog/NewRelic (push) dominate in managed/SaaS monitoring. OpenTelemetry supports both."
  },
  {
    id: 314, topic: "System Design", difficulty: "easy",
    scenario: "What is a Dead Letter Queue (DLQ)?",
    options: [
      "A queue that automatically deletes old messages",
      "A separate queue where messages that fail processing after maximum retries are moved — allowing investigation without blocking the main queue",
      "A queue for messages from deactivated user accounts",
      "A backup queue used when the primary queue is full"
    ],
    correctOption: 1,
    answer: "When a message fails processing after N retries (poison message), it's moved to a DLQ instead of being discarded or blocking the queue. Benefits: main queue keeps flowing, failed messages are preserved for debugging, can be reprocessed after fixing the bug, alerts on DLQ depth indicate problems. Available in: SQS, RabbitMQ, Kafka (via error topic), Azure Service Bus. Best practice: monitor DLQ size, set up alerts, build a tool to replay DLQ messages back to the main queue.",
    tips: "Always configure a DLQ in production. A poison message without DLQ can block an entire queue indefinitely."
  },
  {
    id: 315, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed rate limiter across multiple API gateway instances?",
    options: [
      "Each gateway instance maintains its own local counter independently",
      "Use a centralized counter in Redis (INCR + EXPIRE) or a sliding window algorithm with shared state — trading some accuracy for lower latency with local + sync approaches",
      "Use a database transaction to check and increment the counter on each request",
      "Synchronize all gateway instances via a distributed lock before each request"
    ],
    correctOption: 1,
    answer: "Approaches: (1) Centralized Redis — INCR with EXPIRE for fixed window, Lua script for sliding window. Simple, accurate, but adds Redis round-trip latency to every request, (2) Local + sync — each instance keeps local counters, periodically syncs with Redis. Fast but slightly inaccurate (may slightly exceed limit), (3) Token bucket in Redis — MULTI/EXEC to atomically check and consume tokens. Considerations: race conditions (use Lua scripts for atomicity), Redis failover (fail-open vs fail-closed), multi-region (sync across regions or per-region limits). Sliding window counter is the best balance of accuracy and memory.",
    tips: "Stripe uses a sliding window approach. Cloudflare uses a distributed counting system. Discuss the trade-off: strict accuracy requires centralized state (slower) vs approximate counting allows local state (faster)."
  },
  {
    id: 316, topic: "System Design", difficulty: "medium",
    scenario: "What is the Materialized View pattern?",
    options: [
      "A UI design pattern for rendering data in a visual format",
      "Pre-computing and storing query results as a physical table/view, updated when source data changes — optimizing read-heavy queries that would be expensive to compute on the fly",
      "A database feature that stores SQL view definitions but doesn't pre-compute them",
      "A caching strategy that materializes API responses in CDN"
    ],
    correctOption: 1,
    answer: "A materialized view is a pre-computed, stored result set that's refreshed when underlying data changes (or on a schedule). Instead of joining 5 tables on every query, the join result is stored and updated incrementally. Database support: PostgreSQL (REFRESH MATERIALIZED VIEW), Oracle, SQL Server. In microservices: CQRS read models are essentially materialized views — projections built from events. In data engineering: dbt models, data warehouse views. Trade-off: storage + update cost vs query speed.",
    tips: "PostgreSQL materialized views are refreshed manually (REFRESH) or via triggers. For real-time, use CDC (Debezium) to update the view on every source change."
  },
  {
    id: 317, topic: "System Design", difficulty: "easy",
    scenario: "What is Containerization and how does it differ from Virtualization?",
    options: [
      "Containerization is a newer name for virtualization",
      "Containers share the host OS kernel and isolate at the process level (lightweight, fast); VMs include a full guest OS with a hypervisor (heavier, stronger isolation)",
      "Containers are for development; VMs are for production",
      "VMs are faster because they have direct hardware access"
    ],
    correctOption: 1,
    answer: "VMs: Hypervisor (VMware, KVM) runs multiple guest OSes on one host. Each VM has its own kernel, OS, and libraries. Strong isolation but heavy (GBs of memory, minutes to boot). Containers: Share the host kernel, isolated via namespaces and cgroups. Include only app + dependencies (MBs, seconds to start). Docker is the most popular container runtime. Trade-offs: VMs for strong security isolation (multi-tenant), containers for density and speed (microservices).",
    tips: "Kubernetes manages containers. You can run containers inside VMs for defense-in-depth (AWS EKS runs pods on EC2 VMs)."
  },
  {
    id: 318, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a global unique ID generation system?",
    options: [
      "Use auto-increment IDs from a single database",
      "Use a distributed ID generator like Twitter's Snowflake — combining timestamp, machine ID, and sequence number into a 64-bit ID that's unique, roughly time-sorted, and generated locally without coordination",
      "Use random UUIDs for all IDs",
      "Assign each server a range of IDs and increment locally"
    ],
    correctOption: 1,
    answer: "Snowflake approach: 64-bit ID = timestamp (41 bits, ms precision, ~69 years) + datacenter ID (5 bits) + machine ID (5 bits) + sequence (12 bits, 4096 IDs/ms/machine). Benefits: unique without coordination, roughly time-sorted (enables time-range queries), 64-bit fits in a long (efficient indexing). Alternatives: UUID (128-bit, random, no ordering), ULID (UUID-compatible but time-sorted), database sequences (coordinated, bottleneck), Leaf/Tinyid (range-based). Considerations: clock skew handling, monotonic clocks.",
    tips: "Snowflake IDs are used by Twitter, Discord, Instagram. UUIDs waste index space (128-bit, random ordering causes B-tree page splits). ULID is the modern UUID alternative."
  },
  {
    id: 319, topic: "System Design", difficulty: "medium",
    scenario: "What is the Throttling pattern?",
    options: [
      "Speeding up request processing during peak hours",
      "Deliberately slowing down or limiting resource consumption to prevent overload — degrading service gracefully rather than failing completely under high load",
      "A network protocol that increases bandwidth allocation",
      "A database optimization that limits query execution time"
    ],
    correctOption: 1,
    answer: "Throttling strategies: (1) Reject requests — return 429 after limit exceeded, (2) Degrade service — skip expensive features, return cached/simplified responses, (3) Queue excess requests — process when capacity available, (4) Priority-based — throttle low-priority requests first, keep premium users at full speed. Applied at: API gateway (per-client limits), application layer (per-feature limits), infrastructure (CPU/memory limits). Different from rate limiting: throttling is about resource protection, rate limiting is about client fairness.",
    tips: "Cloud providers throttle API calls (AWS has account-level throttling on most services). Always handle 429 responses with exponential backoff in client code."
  },
  {
    id: 320, topic: "System Design", difficulty: "easy",
    scenario: "What is the CAP theorem's 'Partition Tolerance' in simple terms?",
    options: [
      "The ability to partition data across multiple tables",
      "The system continues to operate even when network communication between nodes is lost or delayed — network partitions are inevitable in distributed systems",
      "The ability to tolerate different data formats across partitions",
      "A tolerance level for how many partitions a database can have"
    ],
    correctOption: 1,
    answer: "A network partition occurs when nodes in a distributed system can't communicate with each other (network failure, cable cut, packet loss). Partition tolerance means the system still functions despite this. Since network partitions are inevitable in real-world distributed systems, you effectively always need P — so the real choice is between C (consistency — all nodes see the same data) and A (availability — every request gets a response, even if it might be stale).",
    tips: "Partition tolerance isn't optional — it's a fact of distributed systems. The real CAP choice is: during a partition, do you prefer consistency (reject requests) or availability (serve possibly stale data)?"
  },
  {
    id: 321, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed job queue like Celery or Sidekiq?",
    options: [
      "Use a shared database table with a 'status' column and poll it from workers",
      "Use a message broker (Redis/RabbitMQ) with task serialization, worker pools, priority queues, result backend, dead letter handling, and task scheduling (delayed/periodic)",
      "Run all jobs synchronously in the web server process",
      "Use cron jobs on each server to process tasks from a shared filesystem"
    ],
    correctOption: 1,
    answer: "Components: (1) Client — serializes task (function name + args) to JSON/pickle, publishes to broker, (2) Broker — message queue (Redis, RabbitMQ) with multiple queues for priorities, (3) Workers — pool of processes that consume tasks, execute, and report results, (4) Result backend — store task results (Redis, DB) for clients to retrieve, (5) Scheduler — cron-like periodic task scheduling (celery beat), delayed tasks, (6) Monitoring — task status dashboard (Flower for Celery), failure alerts. Reliability: at-least-once delivery, idempotent tasks, visibility timeout, DLQ for poison tasks.",
    tips: "Discuss task acknowledgment (ack after completion, not receipt), priority queues, task chaining/grouping, and how to handle long-running tasks (heartbeats)."
  },
  {
    id: 322, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between Synchronous and Asynchronous communication?",
    options: [
      "Synchronous is faster; Asynchronous is more reliable",
      "Synchronous: caller waits for a response before proceeding (HTTP request-response); Asynchronous: caller sends a message and continues without waiting — response comes later via callback, event, or polling",
      "Synchronous only works within a single server; Asynchronous works across servers",
      "Asynchronous communication doesn't return any response"
    ],
    correctOption: 1,
    answer: "Synchronous (REST, gRPC): Client sends request, blocks until response. Simple, easy to reason about, but creates tight coupling and cascading latency. Asynchronous (message queues, events): Client sends message and moves on. Response arrives later (callback, event, or client polls). Decoupled, resilient (producer works even if consumer is down), better throughput. Trade-offs: async is harder to debug (no stack trace across services), eventual consistency, more complex error handling.",
    tips: "Use sync for queries that need immediate responses (GET user profile). Use async for commands that can be processed later (send email, process payment)."
  },
  {
    id: 323, topic: "System Design", difficulty: "easy",
    scenario: "What is a Canary Deployment?",
    options: [
      "Deploying to a server named 'canary' for testing",
      "Gradually rolling out a new version to a small percentage of users first, monitoring for issues, then increasing to 100% — catching problems before they affect everyone",
      "A deployment that only happens during off-peak hours",
      "Deploying a lightweight version of the app to test infrastructure"
    ],
    correctOption: 1,
    answer: "Named after canaries in coal mines (early warning). Deploy new version to 1-5% of traffic. Monitor error rates, latency, business metrics. If healthy, gradually increase (10%, 25%, 50%, 100%). If issues detected, roll back by routing all traffic to the old version. Implementation: load balancer traffic splitting, Kubernetes Istio traffic management, feature flags. More sophisticated than blue-green (gradual vs instant cutover).",
    tips: "Combine with automated rollback: if error rate > threshold, auto-revert. Netflix uses automated canary analysis (Kayenta) to compare metrics."
  },
  {
    id: 324, topic: "System Design", difficulty: "hard",
    scenario: "How would you design an analytics pipeline for processing billions of events per day?",
    options: [
      "Insert every event into a PostgreSQL table and run SQL queries",
      "Use a Lambda or Kappa architecture: ingest events via Kafka, process with stream (Flink/Spark Streaming) and batch (Spark) engines, store in a data lake (S3/HDFS) and OLAP warehouse (ClickHouse/BigQuery) for querying",
      "Aggregate events in application memory and write daily summaries to a file",
      "Use a NoSQL database to store raw events and query them directly"
    ],
    correctOption: 1,
    answer: "Lambda architecture: (1) Ingestion — Kafka (handles billions/day, ordered per partition), (2) Stream layer — Flink/Spark Streaming processes events in real-time (seconds latency), writes to fast OLAP store (Druid, ClickHouse), (3) Batch layer — Spark processes raw data in S3/HDFS daily for accuracy (corrects stream approximations), (4) Serving layer — query engine (Presto/Trino) unifies batch + stream views. Kappa architecture: stream-only (reprocess by replaying Kafka). Storage: raw events in S3 (Parquet format), aggregated data in columnar OLAP DB. Schema: schema registry (Avro) for event evolution.",
    tips: "Discuss exactly-once processing (Flink supports it), late-arriving events (watermarks), and the cost of Lambda's dual-path complexity vs Kappa's simplicity."
  },
  {
    id: 325, topic: "System Design", difficulty: "medium",
    scenario: "What is the Backend For Frontend (BFF) pattern?",
    options: [
      "A frontend framework that includes a built-in backend",
      "Creating a dedicated backend service for each frontend type (web, mobile, TV) that tailors the API, aggregates data, and formats responses specifically for that client's needs",
      "Running the frontend and backend on the same server",
      "A pattern where the backend renders HTML for the frontend"
    ],
    correctOption: 1,
    answer: "Instead of one generic API for all clients, create a BFF per client type. Web BFF might return rich HTML-friendly data, Mobile BFF returns minimal payloads (bandwidth-conscious), TV BFF returns simplified data for limited UI. Each BFF: aggregates calls to downstream microservices, transforms/filters data for its client, handles client-specific auth flows. Benefits: optimized payloads per client, independent evolution, client-specific caching. Drawback: code duplication across BFFs (mitigate with shared libraries).",
    tips: "Netflix uses BFFs (Zuul + GraphQL). A single GraphQL API can sometimes replace multiple BFFs by letting each client request exactly what it needs."
  },
  {
    id: 326, topic: "System Design", difficulty: "easy",
    scenario: "What is Horizontal vs Vertical Pod Scaling?",
    options: [
      "Horizontal adds pods side by side; Vertical stacks pods on top of each other",
      "Horizontal (HPA) adds/removes pod replicas based on load; Vertical (VPA) adjusts CPU/memory resources of existing pods — choose horizontal for stateless services, vertical for stateful or resource-bound services",
      "Horizontal scales the frontend; Vertical scales the backend",
      "They are the same concept in different Kubernetes versions"
    ],
    correctOption: 1,
    answer: "HPA (Horizontal Pod Autoscaler): Increases/decreases the number of pod replicas based on metrics (CPU, memory, custom). Best for stateless services that can run multiple instances. VPA (Vertical Pod Autoscaler): Adjusts the CPU/memory requests/limits of individual pods. Best for stateful services or when you need to right-size pod resources. Can't easily use both on the same metric. KEDA extends HPA with event-driven scaling (scale based on queue depth, HTTP requests, etc.).",
    tips: "Start with HPA for web services (most common). Use VPA for databases, batch jobs, or single-instance services. KEDA is great for scaling to zero."
  },
  {
    id: 327, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a multi-region active-active database system?",
    options: [
      "Replicate data from primary region to secondary regions with read replicas",
      "Deploy writable database instances in each region with conflict resolution (last-write-wins, vector clocks, or CRDTs), cross-region replication, and region-aware routing",
      "Use a single global database instance with very fast network connections",
      "Shard the database so each region owns different data"
    ],
    correctOption: 1,
    answer: "Active-active: all regions accept writes. Challenges: (1) Replication lag — async replication means regions may see different data temporarily, (2) Conflict resolution — same record updated in two regions simultaneously. Solutions: last-write-wins (simple but lossy), vector clocks (detect conflicts, application resolves), CRDTs (conflict-free by design). Architecture: regional DB clusters with cross-region async replication, global load balancer routes users to nearest region, conflict resolution layer. Examples: CockroachDB (serializable, Raft), Cassandra (tunable consistency), DynamoDB Global Tables (LWW).",
    tips: "Active-active is the hardest distributed systems problem. Most companies use active-passive (one writable region) or shard by region (each region owns its users' data). Only use active-active if you truly need it."
  },
  {
    id: 328, topic: "System Design", difficulty: "medium",
    scenario: "What is the Strangler Fig vs Big Bang rewrite approach?",
    options: [
      "Strangler Fig is for small apps; Big Bang is for large apps",
      "Big Bang: rewrite the entire system from scratch and switch over at once (high risk). Strangler Fig: incrementally replace pieces of the old system while it keeps running (low risk, gradual migration)",
      "Big Bang is faster because you start fresh without legacy constraints",
      "They are different names for the same migration strategy"
    ],
    correctOption: 1,
    answer: "Big Bang: Build the new system completely, then switch from old to new in one go. Risks: new system may have unforeseen bugs, no gradual validation, long development before any value delivered, impossible to roll back easily. Strangler Fig: Route traffic through a facade, gradually redirect endpoints from old to new. Benefits: incremental value delivery, easy rollback per feature, old system remains as fallback, team learns as they go. Success rate: Strangler Fig migrations succeed far more often than Big Bang rewrites.",
    tips: "The famous blog post 'Things You Should Never Do' by Joel Spolsky argues against Big Bang rewrites. Strangler Fig is the industry-recommended approach."
  },
  {
    id: 329, topic: "System Design", difficulty: "easy",
    scenario: "What is a Connection Pool?",
    options: [
      "A swimming pool where network cables are connected",
      "A cache of reusable database/network connections that avoids the overhead of creating and destroying connections for every request",
      "A pool of servers that handle incoming connections",
      "A backup pool of connections used during failover"
    ],
    correctOption: 1,
    answer: "Creating a database connection is expensive (TCP handshake, authentication, SSL). A connection pool maintains a set of open connections that are borrowed by requests and returned when done. Configuration: min/max pool size, idle timeout, max wait time. Too small: requests queue waiting for connections. Too large: overwhelms the database. Popular pools: HikariCP (Java, fastest), PgBouncer (PostgreSQL proxy), c3p0. Also used for HTTP connections (HTTP keep-alive, OkHttp pool), Redis connections.",
    tips: "HikariCP default pool size formula: connections = (core_count * 2) + effective_spindle_count. For most apps, 10-20 connections is sufficient."
  },
  {
    id: 330, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed cache like Memcached/Redis Cluster?",
    options: [
      "Run a single large Redis instance with all the RAM you need",
      "Partition keys across multiple nodes using consistent hashing, with replication for high availability, client-side routing or proxy-based routing, and eviction policies for memory management",
      "Store cache in each application server's local memory",
      "Use the database's built-in query cache"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Partitioning — consistent hashing distributes keys across N nodes (each node owns a hash range), virtual nodes for even distribution, (2) Routing — client-side (client knows the ring, routes directly) or proxy-based (twemproxy, envoy), (3) Replication — each primary has 1-2 replicas for failover (Redis Cluster uses async replication), (4) Failover — automatic promotion of replica to primary on failure detection (gossip protocol), (5) Eviction — LRU, LFU, TTL-based when memory is full. Cache patterns: cache-aside (app manages cache), write-through (write to cache + DB), write-behind (write to cache, async to DB).",
    tips: "Redis Cluster uses hash slots (16384 slots distributed across nodes). Discuss cache stampede (thundering herd on cache miss) and solutions (locking, probabilistic early refresh)."
  },
  {
    id: 331, topic: "System Design", difficulty: "medium",
    scenario: "What is Observability and its Three Pillars?",
    options: [
      "Monitoring dashboards, alert rules, and on-call schedules",
      "The ability to understand a system's internal state from its external outputs — achieved through three pillars: Logs (events), Metrics (aggregated measurements), and Traces (request flows across services)",
      "CPU monitoring, memory monitoring, and disk monitoring",
      "Unit tests, integration tests, and end-to-end tests"
    ],
    correctOption: 1,
    answer: "Logs: Timestamped records of discrete events (error messages, request details). Used for debugging specific issues. Tools: ELK Stack, Loki. Metrics: Aggregated numerical measurements over time (request rate, error rate, latency percentiles, CPU usage). Used for alerting and dashboards. Tools: Prometheus, Datadog. Traces: End-to-end journey of a request across services (trace ID + spans with timing). Used for diagnosing latency and understanding service dependencies. Tools: Jaeger, Zipkin. OpenTelemetry unifies collection for all three.",
    tips: "Metrics tell you something is wrong, logs tell you what happened, traces tell you where in the system it happened. Use all three together."
  },
  {
    id: 332, topic: "System Design", difficulty: "easy",
    scenario: "What is a Feature Flag / Feature Toggle?",
    options: [
      "A flag in the source code that enables debug logging",
      "A mechanism to enable or disable features at runtime without deploying new code — enabling gradual rollouts, A/B testing, and instant kill switches",
      "A command-line flag that enables optional features during build",
      "A database flag that marks features as deprecated"
    ],
    correctOption: 1,
    answer: "Feature flags decouple deployment from release. Code is deployed but features are toggled on/off via configuration. Use cases: gradual rollout (enable for 10% of users), A/B testing (variant A vs B), kill switch (instantly disable broken feature), beta testing (enable for specific users), trunk-based development (merge incomplete features behind flags). Tools: LaunchDarkly, Unleash, Flagsmith. Best practice: clean up old flags to prevent tech debt.",
    tips: "Long-lived feature flags become tech debt. Set expiration dates and clean up flags after full rollout. Categorize flags: release, experiment, ops, permission."
  },
  {
    id: 333, topic: "System Design", difficulty: "hard",
    scenario: "How would you design an e-commerce inventory management system that prevents overselling?",
    options: [
      "Check inventory count before each purchase and decrement after payment",
      "Use optimistic locking with version numbers, or reserve inventory with TTL during checkout, and reconcile with eventual consistency — balancing accuracy with performance at scale",
      "Lock the entire inventory table during checkout",
      "Allow overselling and apologize to customers later"
    ],
    correctOption: 1,
    answer: "Approaches: (1) Pessimistic — SELECT FOR UPDATE locks the row during checkout. Accurate but limits concurrency, (2) Optimistic — UPDATE inventory SET count = count - 1, version = version + 1 WHERE id = X AND version = V AND count > 0. Retry on version conflict, (3) Reservation — reserve stock with TTL when user adds to cart, release if checkout abandoned. Best for flash sales, (4) Event-sourced — OrderPlaced event processed sequentially per product, maintaining accurate count in projection. (5) Distributed — shard inventory by product/warehouse, each shard processes orders sequentially. Flash sales: pre-allocate stock to queue, process FIFO.",
    tips: "The hardest part is flash sales (10K people buying the last 100 items simultaneously). Discuss request queuing, pre-validation, and how to handle the 'sorry, sold out' experience."
  },
  {
    id: 334, topic: "System Design", difficulty: "medium",
    scenario: "What is GraphQL and how does it compare to REST?",
    options: [
      "GraphQL is a graph database query language",
      "GraphQL lets clients request exactly the data they need in a single query with a flexible schema — reducing over-fetching and under-fetching compared to REST's fixed endpoint structure",
      "GraphQL is always faster than REST",
      "REST is deprecated and GraphQL is its replacement"
    ],
    correctOption: 1,
    answer: "REST: Multiple endpoints (/users, /users/1/posts), server defines response shape, over-fetching (get all fields even if you need one), under-fetching (need multiple calls for related data). GraphQL: Single endpoint (/graphql), client specifies exact fields needed, nested queries fetch related data in one call, strongly typed schema. Trade-offs: GraphQL adds complexity (resolver functions, N+1 queries, caching harder — no HTTP caching), harder to rate limit (every query is different). REST is simpler for CRUD, GraphQL shines for complex, nested data with varied clients.",
    tips: "Use REST for simple CRUD APIs. Use GraphQL when you have multiple clients (web/mobile) with different data needs. DataLoader solves the N+1 problem in GraphQL."
  },
  {
    id: 335, topic: "System Design", difficulty: "easy",
    scenario: "What is Load Shedding?",
    options: [
      "Removing physical load from server racks to prevent overheating",
      "Intentionally dropping low-priority requests when a system is overloaded to protect capacity for high-priority traffic and prevent total failure",
      "Shedding database load by deleting old records",
      "A gradual reduction in server count during off-peak hours"
    ],
    correctOption: 1,
    answer: "When a system is near capacity, it's better to reject some requests than to slow down all requests (or crash entirely). Strategies: priority-based (serve premium users, shed free-tier), LIFO (drop newest requests — they haven't waited yet), random (simplest), deadline-based (drop requests whose deadline has passed — the client already timed out). Implementation: queue depth thresholds, CPU usage thresholds. Return 503 Service Unavailable with Retry-After header.",
    tips: "Google's approach: prioritize requests by criticality labels (CRITICAL_PLUS > CRITICAL > SHEDDABLE_PLUS > SHEDDABLE). Only shed SHEDDABLE requests first."
  },
  {
    id: 336, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a permission/authorization system like RBAC/ABAC?",
    options: [
      "Hardcode if/else permission checks for each user in the application code",
      "Build a centralized authorization service supporting RBAC (role-based), ABAC (attribute-based), or ReBAC (relationship-based) policies — evaluated via a policy engine with caching for performance",
      "Store permissions in the user's JWT token",
      "Use file system permissions (read/write/execute) for application resources"
    ],
    correctOption: 1,
    answer: "Models: (1) RBAC — users assigned roles, roles have permissions. Simple, works for most apps (Admin can edit, Viewer can read), (2) ABAC — policies based on attributes (user department = resource department AND time = business hours). Flexible, complex, (3) ReBAC — permissions based on relationships (user is member of org that owns document). Used by Google Zanzibar (Google Drive permissions). Architecture: centralized policy engine (OPA, Casbin, SpiceDB), service calls engine with context (user, resource, action), engine evaluates policies, returns allow/deny. Cache decisions in Redis for hot paths.",
    tips: "Google Zanzibar (ReBAC) is the gold standard — used for Drive, YouTube, Cloud IAM. It handles trillions of authorization checks per day. Discuss the balance between centralized policy (consistent) and embedded checks (fast)."
  },
  {
    id: 337, topic: "System Design", difficulty: "medium",
    scenario: "What is the Inbox/Outbox pattern for reliable messaging?",
    options: [
      "An email system design with inbox and outbox folders",
      "Inbox: idempotently process incoming messages using a deduplication table. Outbox: atomically write outgoing events to an outbox table in the same DB transaction as business data — together ensuring exactly-once processing in event-driven systems",
      "A UI pattern for notification inbox and message outbox",
      "A logging pattern that tracks incoming and outgoing API calls"
    ],
    correctOption: 1,
    answer: "Outbox: Write events to an outbox table in the same transaction as business data. A relay process (polling or CDC) publishes to message broker. Ensures: if business data is committed, event will be published. Inbox: Store processed message IDs in an inbox table. Before processing a message, check if its ID exists in inbox. If yes, skip (already processed). If no, process and insert ID atomically. Together: Outbox ensures at-least-once publishing, Inbox ensures at-most-once processing = exactly-once semantics.",
    tips: "The Inbox/Outbox pattern is the practical answer to 'how do you achieve exactly-once in distributed systems?' Debezium (CDC) is more efficient than polling for the outbox relay."
  },
  {
    id: 338, topic: "System Design", difficulty: "easy",
    scenario: "What is Auto-scaling and when should you use it?",
    options: [
      "Automatically scaling font sizes in a responsive UI",
      "Automatically adjusting the number of servers or containers based on real-time demand — scaling up during traffic spikes and down during quiet periods to balance cost and performance",
      "Scaling the database schema automatically as new tables are added",
      "A feature that automatically upgrades servers to more powerful hardware"
    ],
    correctOption: 1,
    answer: "Auto-scaling monitors metrics (CPU, memory, request rate, queue depth) and adjusts capacity. Scale-up: add instances when metrics exceed threshold (CPU > 70%). Scale-down: remove instances when metrics drop (CPU < 30%), with cooldown period to prevent flapping. Types: reactive (respond to current metrics), predictive (use historical patterns to pre-scale before expected spikes), scheduled (scale up at known peak times). Cloud: AWS ASG, Azure VMSS, GCP MIG, Kubernetes HPA.",
    tips: "Set conservative scale-down policies (longer cooldowns) to avoid premature removal. Scale up fast, scale down slow. Pre-warm during expected spikes (Black Friday)."
  },
  {
    id: 339, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time bidding (RTB) system for ad serving?",
    options: [
      "Display random ads from a database of advertisers",
      "When a user loads a page, auction the ad slot in real-time: send bid requests to demand-side platforms (DSPs) with user context, collect bids within 100ms, select the winner, and serve the ad — all in under 200ms total",
      "Pre-assign ads to pages based on page category",
      "Let advertisers manually choose which pages to place ads on"
    ],
    correctOption: 1,
    answer: "Flow (under 200ms): (1) User loads page → ad request to Supply-Side Platform (SSP), (2) SSP sends bid request to 10-50 Demand-Side Platforms (DSPs) with user context (demographics, interests, page content), (3) Each DSP evaluates its advertisers' targeting rules, runs ML model for bid price, responds within 100ms, (4) SSP runs second-price auction (winner pays second-highest bid + $0.01), (5) Winning ad creative served to user, (6) Track impressions, clicks, conversions for billing. Scale: millions of auctions per second, globally distributed, strict latency SLAs.",
    tips: "Discuss the privacy implications (user tracking, cookie deprecation, Topics API), frequency capping (don't show same ad 100 times), and how ML models predict click-through rate (CTR) to optimize bid prices."
  },
  {
    id: 340, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between a Queue and a Topic in messaging?",
    options: [
      "Queues are for text messages; Topics are for binary data",
      "Queue (point-to-point): each message consumed by exactly one consumer. Topic (pub/sub): each message delivered to all subscribers — choose based on whether you need competing consumers or fan-out",
      "Queues are persistent; Topics are in-memory only",
      "Topics are ordered; Queues are unordered"
    ],
    correctOption: 1,
    answer: "Queue (Point-to-Point): Message consumed by exactly one consumer. Work is distributed across consumers (competing consumers pattern). Use case: task processing, job queues. Examples: SQS, RabbitMQ queue. Topic (Pub/Sub): Message delivered to ALL subscribers. Each subscriber gets a copy. Use case: event broadcasting, notifications. Examples: SNS, RabbitMQ exchange, Kafka topic (with consumer groups for both patterns). Kafka blurs the line: consumer groups behave like queues (one consumer per partition), different groups behave like topics (each group gets all messages).",
    tips: "Kafka's consumer group model is the most flexible — it supports both patterns. SQS + SNS together (fan-out to SQS queues via SNS topic) is a common AWS pattern."
  },
  {
    id: 341, topic: "System Design", difficulty: "easy",
    scenario: "What is a Microservice vs a Nanoservice?",
    options: [
      "Microservices are small; Nanoservices are even smaller and always better",
      "A nanoservice is a service that is too fine-grained — the overhead of deploying, monitoring, and communicating with it exceeds its value. It's an anti-pattern of over-decomposition",
      "Nanoservices run on smaller servers with less memory",
      "Microservices use REST; Nanoservices use gRPC"
    ],
    correctOption: 1,
    answer: "A nanoservice is an anti-pattern where services are split too finely. Signs: a service that's just a thin wrapper around a single database table, a service that always changes together with another service, a service that adds network latency without providing independent value. The overhead (separate deployment, monitoring, network calls, debugging) outweighs the benefit. Right-sizing: a microservice should align with a bounded context (DDD), be independently deployable, and be owned by one team.",
    tips: "If two services always deploy together, they should probably be one service. Start with fewer, larger services and split when you have a clear reason."
  },
  {
    id: 342, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a CDC (Change Data Capture) pipeline?",
    options: [
      "Add triggers on every database table that call an API on each change",
      "Read the database transaction log (binlog/WAL) to capture row-level changes in real-time, stream them through Kafka, and apply to downstream systems — using tools like Debezium for log-based CDC",
      "Poll the database every second for rows with updated_at > last_check",
      "Export the database daily and diff the exports"
    ],
    correctOption: 1,
    answer: "Log-based CDC (best): (1) Read database's transaction log (MySQL binlog, PostgreSQL WAL, MongoDB oplog), (2) Debezium connector captures INSERT/UPDATE/DELETE events, (3) Publish to Kafka topic (one topic per table), (4) Downstream consumers: update search index (Elasticsearch), populate cache (Redis), sync to data warehouse, build materialized views. Benefits: no impact on source DB performance, captures all changes (including deletes), maintains order. Alternatives: trigger-based (overhead on DB), polling (misses deletes, high latency), dual-write (inconsistency risk).",
    tips: "Debezium + Kafka Connect is the industry standard. Discuss schema evolution (Avro + Schema Registry), initial snapshot (existing data), and how to handle DDL changes (table schema changes)."
  },
  {
    id: 343, topic: "System Design", difficulty: "medium",
    scenario: "What is the Token Bucket algorithm for rate limiting?",
    options: [
      "An algorithm that generates authentication tokens for API access",
      "A bucket holds tokens added at a fixed rate; each request consumes a token. If the bucket is empty, the request is rejected. The bucket has a maximum capacity allowing short bursts",
      "An algorithm that distributes tokens (tickets) to users in a queue",
      "A bucket that collects tokens from completed requests for recycling"
    ],
    correctOption: 1,
    answer: "How it works: Bucket starts with max_tokens. Tokens added at rate R per second. Each request removes 1 token. If bucket empty, request rejected (429). Bucket capped at max_tokens (burst capacity). Example: rate=10/s, burst=50. Steady state: 10 req/s. Can burst to 50 requests instantly, then back to 10/s. Advantages: simple, allows bursts (real traffic is bursty), smooth rate limiting. Implementation: store last_refill_time and token_count per client in Redis. Refill lazily on each request (tokens = min(max, tokens + rate * elapsed)).",
    tips: "AWS API Gateway and Stripe both use Token Bucket. The 'leaky bucket' alternative enforces a strict constant rate with no bursts — used for traffic shaping."
  },
  {
    id: 344, topic: "System Design", difficulty: "easy",
    scenario: "What is the N+1 Query Problem?",
    options: [
      "A database that can only handle N+1 concurrent connections",
      "Loading a list of N items with 1 query, then executing N additional queries to load related data for each item — solved by eager loading or batching",
      "A query that returns N+1 more rows than expected",
      "A bug where a loop runs N+1 times instead of N times"
    ],
    correctOption: 1,
    answer: "Example: Fetch 100 users (1 query), then for each user fetch their orders (100 queries) = 101 queries total. Should be 2 queries: fetch users, fetch all orders WHERE user_id IN (...). Solutions: (1) Eager loading / JOIN (SQL), (2) Batch loading / DataLoader (GraphQL), (3) Subquery / IN clause, (4) ORM configuration (JPA: @Fetch(FetchMode.JOIN), Django: select_related/prefetch_related). Detection: query logging, ORM query counters, APM tools.",
    tips: "N+1 is the #1 performance killer in ORM-based applications. Always check query counts when loading collections. GraphQL's DataLoader was invented specifically for this problem."
  },
  {
    id: 345, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a secrets management system like HashiCorp Vault?",
    options: [
      "Store secrets in environment variables on each server",
      "Build a centralized secrets store with encryption at rest, dynamic secret generation, access policies, audit logging, automatic rotation, and secure delivery to applications via short-lived tokens",
      "Keep secrets in a private Git repository",
      "Encrypt secrets and store them in the application's config file"
    ],
    correctOption: 1,
    answer: "Components: (1) Secrets engine — store static secrets (KV store), generate dynamic secrets (temporary DB credentials, AWS IAM roles, TLS certs), (2) Encryption — all secrets encrypted at rest with master key, master key protected by unseal keys (Shamir's Secret Sharing), (3) Auth methods — how apps authenticate to Vault (Kubernetes ServiceAccount, AWS IAM, OIDC, AppRole), (4) Policies — RBAC controlling which paths an identity can access, (5) Audit — every access logged, (6) Leasing — secrets have TTL, automatically revoked when expired, (7) Rotation — periodic secret rotation without app restarts (agent sidecar refreshes).",
    tips: "Never store secrets in code, Git, or environment variables (they persist in process tables). Discuss Vault Agent (sidecar that refreshes secrets), and how Kubernetes Secrets are base64-encoded (NOT encrypted) by default."
  },
  {
    id: 346, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between Horizontal and Vertical Partitioning?",
    options: [
      "Horizontal splits by rows; Vertical splits by columns — but they mean the same in practice",
      "Horizontal partitioning (sharding) splits rows across multiple tables/databases by a key; Vertical partitioning splits columns of a wide table into separate tables — each optimizes for different access patterns",
      "Horizontal is for NoSQL; Vertical is for SQL",
      "Horizontal adds more servers; Vertical adds more storage to one server"
    ],
    correctOption: 1,
    answer: "Horizontal partitioning (sharding): Split rows by a partition key. Users A-M on shard 1, N-Z on shard 2. Each shard has the same columns. Benefits: distributes load, enables horizontal scaling. Vertical partitioning: Split columns into separate tables. Keep frequently accessed columns (name, email) in one table, rarely accessed columns (bio, avatar) in another. Benefits: reduces I/O (smaller rows = more rows per page), separate hot and cold data. Can combine both: shard horizontally AND partition columns vertically.",
    tips: "Vertical partitioning is essentially database normalization taken further. Useful when a table has 50+ columns but most queries only need 5-10."
  },
  {
    id: 347, topic: "System Design", difficulty: "easy",
    scenario: "What is Infrastructure as Code (IaC)?",
    options: [
      "Writing code that runs on infrastructure servers",
      "Managing and provisioning infrastructure through machine-readable configuration files rather than manual processes — enabling version control, reproducibility, and automation",
      "A coding standard for infrastructure teams",
      "Infrastructure diagrams written as code comments"
    ],
    correctOption: 1,
    answer: "Define infrastructure (servers, networks, databases, load balancers) in declarative config files. Tools: Terraform (multi-cloud, HCL language), CloudFormation (AWS), Pulumi (general-purpose languages), Ansible (configuration management). Benefits: version controlled (Git), reproducible (same config = same infrastructure), reviewable (PR process), automated (CI/CD deploys infrastructure), self-documenting. Declarative (describe desired state, tool figures out changes) vs Imperative (describe steps to execute).",
    tips: "Terraform is the industry standard for multi-cloud IaC. Use remote state (S3 + DynamoDB lock) for team collaboration. Never click-ops in production — all changes through IaC."
  },
  {
    id: 348, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time multiplayer game server?",
    options: [
      "Use REST APIs for every player action and poll for game state",
      "Use UDP for fast game state updates with client-side prediction, server-side authoritative state, lag compensation, and tick-based simulation — optimizing for low latency over reliability",
      "Let each player run the game simulation and sync results via a database",
      "Use WebSockets with JSON payloads for all game communication"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Network — UDP for game state (fast, tolerates packet loss), TCP/WebSocket for chat and inventory, (2) Tick-based simulation — server updates game state at fixed rate (20-60 ticks/sec), (3) Client-side prediction — client simulates locally for responsiveness, server corrects on mismatch, (4) Server reconciliation — server is authoritative, rewinds and replays if client prediction was wrong, (5) Lag compensation — server rewinds time to when a player fired, checks if their shot hit based on what they saw, (6) Interest management — only send updates about nearby entities, (7) Matchmaking — skill-based pairing, region-aware for low latency.",
    tips: "Fortnite uses a dedicated server model. Discuss the difference between peer-to-peer (fighting games) vs dedicated server (FPS/battle royale) and the cheating implications of each."
  },
  {
    id: 349, topic: "System Design", difficulty: "medium",
    scenario: "What is the Circuit Breaker's relationship with Retry and Timeout patterns?",
    options: [
      "They are three alternative patterns — you should only use one",
      "They work together in layers: Timeout prevents waiting forever, Retry handles transient failures, Circuit Breaker stops retrying when a service is clearly down — forming a comprehensive resilience strategy",
      "Circuit Breaker replaces the need for Timeout and Retry",
      "Retry is for databases, Timeout is for APIs, Circuit Breaker is for message queues"
    ],
    correctOption: 1,
    answer: "Layer 1 — Timeout: Set a deadline for each call (e.g., 2s). Prevents hanging when service is slow. Layer 2 — Retry: On timeout or transient error, retry with exponential backoff + jitter (e.g., 3 retries). Handles temporary blips. Layer 3 — Circuit Breaker: Track failure rate across calls. If rate exceeds threshold (e.g., 50% of last 10 calls), open the circuit — skip retries entirely, fail fast for 30s, then try one request (half-open). Prevents overwhelming a struggling service with retries. Together: Timeout → Retry → Circuit Breaker = defense in depth.",
    tips: "Resilience4j (Java) and Polly (.NET) provide all three patterns as composable decorators. Order matters: Circuit Breaker wraps Retry wraps Timeout."
  },
  {
    id: 350, topic: "System Design", difficulty: "easy",
    scenario: "What is Data Denormalization and when is it used?",
    options: [
      "Removing all data validation rules from a database",
      "Intentionally duplicating data across tables to reduce the need for joins and speed up read queries — trading storage space and write complexity for read performance",
      "Converting data to a non-standard format for storage",
      "Removing normalization constraints to allow NULL values"
    ],
    correctOption: 1,
    answer: "Normalization: eliminate data duplication (3NF — separate tables, join at query time). Denormalization: intentionally duplicate data for read performance. Example: store author_name directly in the posts table instead of joining with authors table. When: read-heavy workloads, complex joins are too slow, NoSQL databases (no joins available). Trade-offs: faster reads but slower writes (update in multiple places), data inconsistency risk, more storage. Common in: OLAP data warehouses, NoSQL document stores, CQRS read models.",
    tips: "Normalize for OLTP (transactional), denormalize for OLAP (analytical). In microservices, each service's database is often denormalized since cross-service joins aren't possible."
  },
  {
    id: 351, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a global-scale DNS system like Route 53?",
    options: [
      "Run a single powerful DNS server with a large cache",
      "Deploy authoritative nameservers in multiple regions with anycast routing, health-checked routing policies (latency, geolocation, weighted, failover), TTL-based caching at recursive resolvers, and DNSSEC for security",
      "Use a CDN to cache DNS responses at edge locations",
      "Store all DNS records in a blockchain for decentralization"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Anycast — same IP announced from all PoPs, BGP routes queries to nearest, (2) Authoritative servers in every region — serve zone files with A, AAAA, CNAME, MX, TXT records, (3) Routing policies — simple (single answer), weighted (traffic splitting), latency-based (route to lowest-latency region), geolocation (route by country), failover (primary/secondary with health checks), (4) Health checks — actively probe endpoints, remove unhealthy targets from DNS responses, (5) Zone transfer — replicate records across all PoPs, (6) DNSSEC — cryptographically sign responses to prevent DNS spoofing.",
    tips: "DNS is one of the most critical infrastructure components — a DNS outage means everything is unreachable. Discuss DNS propagation delay (TTL trade-off: low = fast failover but more queries, high = fewer queries but slow failover)."
  },
  {
    id: 352, topic: "System Design", difficulty: "medium",
    scenario: "What is Chaos Engineering?",
    options: [
      "Writing code without following any design patterns",
      "Deliberately injecting failures into production systems to test resilience — verifying that the system behaves as expected under adverse conditions before real failures occur",
      "A testing methodology that uses random inputs to find bugs",
      "An agile practice where teams work without structured processes"
    ],
    correctOption: 1,
    answer: "Principles: (1) Define steady state — normal behavior metrics (latency, error rate, throughput), (2) Hypothesize — 'if X fails, the system will degrade gracefully', (3) Inject failures — kill instances, inject network latency, fill disks, corrupt packets, (4) Observe — does the system maintain steady state? (5) Learn and fix. Tools: Chaos Monkey (random instance termination), Gremlin (comprehensive failure injection), Litmus (Kubernetes chaos), Toxiproxy (network failures). Start small (staging) and gradually move to production. Netflix pioneered this with Simian Army.",
    tips: "Don't just break things randomly — have a hypothesis and blast radius controls. Start with game days (scheduled chaos exercises) before continuous chaos in production."
  },
  {
    id: 353, topic: "System Design", difficulty: "easy",
    scenario: "What is API Versioning and what strategies exist?",
    options: [
      "Incrementing a version number in the source code for each deployment",
      "Managing changes to an API over time so existing clients aren't broken — strategies include URL path versioning (/v1/users), header versioning, and query parameter versioning",
      "Using semantic versioning (semver) for API packages",
      "Keeping backup copies of old API code in separate branches"
    ],
    correctOption: 1,
    answer: "Strategies: (1) URL path — /v1/users, /v2/users. Most common, explicit, easy to route. (2) Header — Accept: application/vnd.api+json;version=2. Cleaner URLs but harder to test in browser. (3) Query param — /users?version=2. Simple but pollutes query string. (4) Content negotiation — Accept header with media type. Best practices: support at least N-1 versions, deprecation notices in headers, migration guides, sunset dates. Breaking changes need a new version; additive changes (new fields) don't.",
    tips: "Most companies use URL path versioning (GitHub, Stripe, Twitter). Only bump the major version for breaking changes. Deprecate old versions with a timeline."
  },
  {
    id: 354, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time collaborative whiteboard like Miro/FigJam?",
    options: [
      "Store the whiteboard as a single image and overwrite it on each change",
      "Model the whiteboard as a CRDT-based object graph, sync changes via WebSocket with operational transforms, use spatial indexing for viewport-based rendering, and persist state in an event log",
      "Send screenshots of each user's canvas to other users every second",
      "Use a shared database row that multiple users update simultaneously"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Data model — canvas as a tree of objects (shapes, text, connectors) each with position, style, z-index. Use CRDTs for conflict-free concurrent edits, (2) Real-time sync — WebSocket connections, each edit broadcast to all viewers of the board. Operational transforms or CRDT merge for concurrent edits to same object, (3) Spatial indexing — R-tree or Quadtree for viewport queries (only render objects in visible area), (4) Persistence — event log (append-only) for all changes, periodic snapshots for fast loading, (5) Cursors — broadcast cursor positions at 30fps for presence awareness, (6) Scale — partition boards across servers, each server handles a subset of active boards.",
    tips: "Figma uses a custom CRDT implementation for real-time collaboration. Discuss undo/redo per user (each user has their own undo stack), and how to handle latency for remote users (optimistic local apply + server reconciliation)."
  },
  {
    id: 355, topic: "System Design", difficulty: "medium",
    scenario: "What is the Write-Behind (Write-Back) Caching pattern?",
    options: [
      "Writing data behind a firewall for security",
      "Write to the cache first, return success immediately, then asynchronously write to the database in the background — optimizing for write performance at the risk of data loss if cache fails before sync",
      "A pattern where writes always bypass the cache and go directly to the database",
      "Writing cache entries backwards (newest first) for faster access"
    ],
    correctOption: 1,
    answer: "Flow: Application writes to cache → cache returns success immediately → cache asynchronously flushes to database (batched, periodic, or on eviction). Benefits: lowest write latency (no DB wait), batch writes reduce DB load, absorbs write spikes. Risks: data loss if cache crashes before sync, eventual consistency between cache and DB. Compare: Write-Through (write to cache + DB synchronously — consistent but slower), Write-Around (write to DB only, cache on read miss — simple but cache misses on new data), Cache-Aside (app manages cache explicitly).",
    tips: "Write-behind is used by CPU caches (L1/L2), OS page cache, and some distributed caches. For critical data (payments), use write-through. For analytics/counters, write-behind is fine."
  },
  {
    id: 356, topic: "System Design", difficulty: "easy",
    scenario: "What is SLA, SLO, and SLI?",
    options: [
      "Three different server monitoring tools",
      "SLI (Service Level Indicator) is the metric, SLO (Service Level Objective) is the target, SLA (Service Level Agreement) is the contractual guarantee with consequences — forming a hierarchy of reliability commitments",
      "SLA is for external users; SLO is for internal; SLI is for developers",
      "They are interchangeable terms for service reliability"
    ],
    correctOption: 1,
    answer: "SLI (Indicator): A specific metric measuring service health. Example: 'percentage of requests completing in <200ms'. SLO (Objective): The target value for an SLI. Example: '99.9% of requests complete in <200ms'. Internal goal, drives engineering decisions. SLA (Agreement): A contract with customers including SLOs and consequences for missing them (credits, refunds). Example: '99.9% uptime or 10% credit'. Hierarchy: SLI measures → SLO targets → SLA promises. Error budget = 100% - SLO (e.g., 0.1% = ~43 minutes/month of allowed downtime).",
    tips: "Set SLOs stricter than SLAs (internal target should be higher than customer promise). Error budgets drive release velocity — if you're burning error budget, slow down deployments."
  },
  {
    id: 357, topic: "System Design", difficulty: "hard",
    scenario: "How would you design an end-to-end encrypted messaging system?",
    options: [
      "Encrypt messages with the server's public key so only the server can read them",
      "Use the Signal Protocol: each user has identity keys and pre-keys, establish session keys via X3DH key agreement, encrypt each message with a unique key via Double Ratchet algorithm — the server never has access to plaintext",
      "Use HTTPS for all communication — that's sufficient for encryption",
      "Share a password between sender and receiver for symmetric encryption"
    ],
    correctOption: 1,
    answer: "Signal Protocol: (1) Key generation — each user creates identity key pair, signed pre-key, and one-time pre-keys, uploads public parts to server, (2) X3DH — when Alice messages Bob for the first time, she fetches Bob's keys from server, performs Extended Triple Diffie-Hellman to establish a shared secret (no server involvement), (3) Double Ratchet — for each message, derive a new encryption key (forward secrecy: compromising one key doesn't reveal past/future messages), (4) Server stores only encrypted blobs and metadata (sender, recipient, timestamp), never plaintext. Group chats: Sender Keys protocol (one encryption per group, not per member).",
    tips: "Discuss the metadata problem — server knows who talks to whom and when, even without reading content. Signal minimizes metadata; WhatsApp collects more. Mention key verification (QR code scanning) to prevent MITM attacks."
  },
  {
    id: 358, topic: "System Design", difficulty: "medium",
    scenario: "What is Domain-Driven Design (DDD) and Bounded Contexts?",
    options: [
      "A web design methodology focused on domain name selection",
      "A software design approach that models software around business domains — Bounded Contexts define clear boundaries where a particular domain model applies, guiding microservice decomposition",
      "A database design methodology for domain-specific tables",
      "A UI/UX design approach focused on the user's domain knowledge"
    ],
    correctOption: 1,
    answer: "DDD core concepts: (1) Ubiquitous Language — shared vocabulary between developers and domain experts, (2) Bounded Context — a boundary within which a domain model has a specific meaning. 'Customer' in Billing context ≠ 'Customer' in Shipping context, (3) Aggregates — cluster of domain objects treated as a unit (Order + OrderLines), (4) Domain Events — 'OrderPlaced', 'PaymentReceived'. For microservices: each bounded context becomes a service with its own database. Context mapping defines how contexts communicate (shared kernel, customer-supplier, anti-corruption layer).",
    tips: "DDD is the best way to decompose a monolith into microservices. Don't split by technical layer (auth service, database service) — split by business domain (orders, payments, inventory)."
  },
  {
    id: 359, topic: "System Design", difficulty: "easy",
    scenario: "What is a Reverse Index (Inverted Index)?",
    options: [
      "An index that reverses the sort order of database records",
      "A data structure that maps content (words/tokens) to the documents containing them — the foundation of full-text search engines like Elasticsearch and Lucene",
      "A database index that is built from the last column to the first",
      "An index that stores the inverse (negative) of numerical values"
    ],
    correctOption: 1,
    answer: "Forward index: document → words it contains. Inverted index: word → documents containing it. Example: 'react' → [doc1, doc3, doc7], 'hooks' → [doc1, doc5]. When searching for 'react hooks', find the intersection of both posting lists → doc1. Enhanced with: term frequency (how often the word appears), positions (for phrase queries), field boosts (title matches > body matches). Foundation of: Elasticsearch, Solr, Lucene, Google Search.",
    tips: "Building an inverted index: tokenize → normalize (lowercase, stem) → build posting lists → compress (variable-byte encoding). Discuss how Elasticsearch shards the index across nodes for distributed search."
  },
  {
    id: 360, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a system for processing 1 million file uploads per hour?",
    options: [
      "Process each upload synchronously in the web server thread",
      "Accept uploads via pre-signed URLs to object storage (S3), trigger processing via events (S3 notification → SQS → workers), with auto-scaling worker fleet, status tracking, and retry/DLQ for failures",
      "Store files on the web server's local disk and process them via cron",
      "Batch all uploads and process them once per hour"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Upload — client gets pre-signed S3 URL from API, uploads directly to S3 (bypasses app servers), (2) Event trigger — S3 event notification → SQS queue, (3) Worker fleet — auto-scaling EC2/Lambda workers pull from SQS, process files (resize, transcode, scan, parse), (4) Status tracking — update processing status in DynamoDB (pending → processing → completed/failed), (5) Result storage — processed files back to S3, metadata to DB, (6) Notification — notify client via webhook/WebSocket when done. Reliability: SQS visibility timeout, DLQ for poison files, idempotent processing (same file processed twice = same result).",
    tips: "Pre-signed URLs are key — they remove the app server from the upload data path. Discuss multipart upload for large files, virus scanning before processing, and cost optimization (S3 Intelligent-Tiering for storage)."
  },
  {
    id: 361, topic: "System Design", difficulty: "medium",
    scenario: "What is the Saga Orchestration vs Choreography trade-off?",
    options: [
      "Orchestration is for large teams; Choreography is for small teams",
      "Orchestration: a central coordinator directs each step (easier to understand and monitor). Choreography: services react to events independently (more decoupled but harder to trace). Choose based on complexity and observability needs",
      "Orchestration is synchronous; Choreography is asynchronous",
      "They produce different outcomes for the same transaction"
    ],
    correctOption: 1,
    answer: "Orchestration: Central saga orchestrator service sends commands to each participant in sequence. Knows the full workflow. Pros: easy to understand flow, centralized error handling, simple to add/modify steps. Cons: single point of failure, coupling to orchestrator. Choreography: No central controller. Each service publishes events, other services subscribe and react. Pros: fully decoupled, no SPOF, services are autonomous. Cons: hard to trace full flow (distributed logic), harder to debug, risk of cyclic dependencies. Hybrid: choreography for simple flows, orchestration for complex multi-step transactions.",
    tips: "Use orchestration when the saga has >4 steps or complex branching logic. Use choreography for simple 2-3 step flows between autonomous teams."
  },
  {
    id: 362, topic: "System Design", difficulty: "easy",
    scenario: "What is a Monorepo vs Polyrepo?",
    options: [
      "Monorepo is one big app; Polyrepo is many small apps",
      "Monorepo: all projects/services in a single Git repository. Polyrepo: each project/service in its own repository — each approach has trade-offs in code sharing, tooling, and team autonomy",
      "Monorepo is for monoliths; Polyrepo is for microservices",
      "Polyrepo is always better for large organizations"
    ],
    correctOption: 1,
    answer: "Monorepo (Google, Meta, Uber): All code in one repo. Pros: easy code sharing, atomic cross-project changes, unified tooling and CI, simple dependency management. Cons: requires sophisticated build tools (Bazel, Nx), large repo size, access control complexity. Polyrepo: Each service in its own repo. Pros: clear ownership, independent CI/CD, smaller repos, simple access control. Cons: harder to share code (publish libraries), cross-repo changes require multiple PRs, dependency version conflicts. Tools: Nx, Turborepo, Bazel for monorepos.",
    tips: "Google has billions of lines in one repo. Small/mid companies often start monorepo, split to polyrepo as teams grow. The key factor is your team structure (Conway's Law)."
  },
  {
    id: 363, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a financial ledger system that ensures double-entry bookkeeping?",
    options: [
      "Use a single balance field per account and update it directly",
      "Record every transaction as a pair of immutable debit and credit entries that always sum to zero — using append-only storage, idempotency keys, and reconciliation to ensure accuracy",
      "Store transaction amounts and calculate balances on the fly",
      "Use blockchain to record all financial transactions"
    ],
    correctOption: 1,
    answer: "Core principles: (1) Double-entry — every transaction creates two entries: debit from one account, credit to another. Sum of all entries = 0 always, (2) Immutability — entries are append-only, never updated or deleted. Corrections create reversing entries, (3) Idempotency — unique transaction ID prevents double-posting, (4) Balance calculation — current balance = sum of all entries for an account (or cached with periodic reconciliation), (5) Reconciliation — nightly job verifies all debits = all credits, account balances match entry sums. Schema: entries(id, txn_id, account_id, amount, type[DEBIT/CREDIT], created_at). Use serializable isolation for concurrent transactions to the same account.",
    tips: "This is the foundation of every payment system (Stripe, Square, banks). Discuss how to handle multi-currency (conversion entries), audit requirements, and why immutability is non-negotiable for financial systems."
  },
  {
    id: 364, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between Active-Active and Active-Passive high availability?",
    options: [
      "Active-Active is for databases; Active-Passive is for application servers",
      "Active-Active: all instances serve traffic simultaneously (higher throughput, complex). Active-Passive: standby instance takes over only when the primary fails (simpler, but wasted standby resources)",
      "Active-Active requires more servers than Active-Passive",
      "Active-Passive has faster failover than Active-Active"
    ],
    correctOption: 1,
    answer: "Active-Passive (failover): Primary handles all traffic. Standby is idle, replicating data from primary. On primary failure, standby is promoted (manual or automatic). RTO depends on detection + promotion time. Pros: simple, no conflict resolution. Cons: wasted standby resources, failover delay. Active-Active: All instances serve traffic simultaneously. Load balanced across all. On failure, remaining instances handle increased load. Pros: better resource utilization, higher throughput, faster failover (already serving traffic). Cons: conflict resolution (concurrent writes), data consistency challenges, more complex.",
    tips: "Most databases use active-passive (primary-replica). Active-active is preferred for stateless application servers. CockroachDB and Cassandra support active-active writes."
  },
  {
    id: 365, topic: "System Design", difficulty: "easy",
    scenario: "What is a Service Registry and Service Discovery?",
    options: [
      "A registry of all team members who maintain each service",
      "A service registry maintains a list of available service instances and their locations — service discovery enables services to find each other dynamically without hardcoded addresses",
      "A DNS server specifically for microservices",
      "A database that stores service source code and documentation"
    ],
    correctOption: 1,
    answer: "Service Registry: Central database of service instances (name, IP, port, health status). Examples: Consul, Eureka, etcd, Kubernetes DNS. Service Discovery: How services find each other. Client-side: client queries registry, picks an instance, connects directly (Eureka + Ribbon). Server-side: client sends to load balancer/proxy, which queries registry and routes (Kubernetes Service, AWS ALB). Registration: self-registration (service registers itself on startup) or third-party (deployer registers service). Health checks remove unhealthy instances.",
    tips: "Kubernetes has built-in service discovery via DNS (service-name.namespace.svc.cluster.local). In non-Kubernetes environments, Consul or Eureka are common."
  },
  {
    id: 366, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a system to handle flash sales with 100K concurrent users buying limited inventory?",
    options: [
      "Let all users hit the database directly and rely on database locks",
      "Use a multi-layer architecture: CDN for static content, request queuing to throttle traffic, Redis for atomic inventory decrement, pre-validation to filter ineligible requests, and async order processing",
      "Scale up the database server to handle the load",
      "First-come-first-served based on timestamp in the application"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Pre-sale — cache product page on CDN, pre-warm Redis with inventory count, (2) Start — gate with virtual waiting room (queue with position), (3) Validation — check eligibility (one per user) via Redis SET NX, (4) Inventory — DECR in Redis (atomic, O(1)), reject if count <= 0. Only ~1% of requests reach this point, (5) Order creation — push to Kafka, process asynchronously. User gets 'order pending' status, (6) Payment — process payment, confirm or release inventory on failure. Key: shed load early (CDN → queue → validation → inventory → order). 100K users but only 1000 items = reject 99% as early as possible.",
    tips: "The key insight: treat it as a filtering funnel. Each layer rejects most requests cheaply before they reach expensive downstream systems. Discuss bot prevention (CAPTCHA, device fingerprinting) and fairness (lottery vs FIFO)."
  },
  {
    id: 367, topic: "System Design", difficulty: "medium",
    scenario: "What is a Gossip Protocol?",
    options: [
      "A protocol for encrypting inter-service gossip (chat messages)",
      "A peer-to-peer communication protocol where each node periodically shares state information with random peers — eventually propagating information to all nodes, used for failure detection and membership",
      "A publish-subscribe pattern where nodes subscribe to gossip topics",
      "A monitoring protocol that reports node gossip (log messages) to a central server"
    ],
    correctOption: 1,
    answer: "How it works: Each node periodically picks a random peer, exchanges state information (heartbeats, membership, metadata). Over O(log N) rounds, information reaches all nodes (epidemic spread). Properties: decentralized (no leader), fault-tolerant (works with node failures), eventually consistent, scalable. Used by: Cassandra (failure detection, cluster membership), Consul (node health), SWIM (membership protocol), Redis Cluster (node state). Trade-off: eventual consistency (not instant propagation) and bandwidth overhead from periodic exchanges.",
    tips: "Gossip is remarkably robust — even with 50% packet loss, information still propagates. The SWIM protocol is an efficient gossip variant used by Consul and Serf."
  },
  {
    id: 368, topic: "System Design", difficulty: "easy",
    scenario: "What is the difference between Pub/Sub and Request-Response?",
    options: [
      "Pub/Sub is for publishing; Request-Response is for subscribing",
      "Request-Response: client sends a request and waits for a reply (synchronous, 1:1). Pub/Sub: publisher sends messages to a topic, all subscribers receive them asynchronously (1:many, decoupled)",
      "Request-Response is older technology that Pub/Sub replaces",
      "Pub/Sub is slower but more reliable than Request-Response"
    ],
    correctOption: 1,
    answer: "Request-Response (REST, gRPC): Synchronous, client knows the server, expects a direct reply. Best for: queries, CRUD operations, anything needing immediate feedback. Pub/Sub (Kafka, SNS, Redis Pub/Sub): Asynchronous, publisher doesn't know subscribers, messages fan out to all subscribers. Best for: event broadcasting, notifications, decoupled workflows. Key differences: coupling (tight vs loose), latency (immediate vs eventual), topology (1:1 vs 1:many), failure handling (caller handles vs dead letter queue).",
    tips: "Many systems use both: REST for synchronous queries (GET user), Pub/Sub for asynchronous events (UserCreated event triggers email, analytics, onboarding)."
  },
  {
    id: 369, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a multi-tenant data isolation strategy for a SaaS platform?",
    options: [
      "Use one giant database with no tenant separation",
      "Choose between shared DB with tenant_id (silo), schema-per-tenant (bridge), or DB-per-tenant (pool) based on isolation requirements, compliance needs, and cost — with row-level security and tenant context enforcement",
      "Give each tenant their own cloud account",
      "Use encryption to isolate tenant data in the same tables"
    ],
    correctOption: 1,
    answer: "Models: (1) Pool (shared everything) — shared DB, shared tables, tenant_id column. Cheapest, easiest to manage, weakest isolation. Enforce with Row-Level Security (PostgreSQL RLS), always filter by tenant_id, (2) Bridge (schema-per-tenant) — shared DB, separate schemas. Moderate isolation, moderate cost. Easy per-tenant backup/restore, (3) Silo (DB-per-tenant) — separate database per tenant. Strongest isolation, most expensive, easiest compliance (data residency). Hybrid: small tenants share (pool), enterprise tenants get dedicated (silo). Cross-cutting: tenant context in JWT, middleware enforces tenant_id on every query, audit logging per tenant.",
    tips: "The biggest risk is tenant data leakage — a missing WHERE tenant_id = X clause exposes all tenants' data. Use framework-level enforcement (Hibernate filters, Django multi-tenancy middleware) to make it impossible to forget."
  },
  {
    id: 370, topic: "System Design", difficulty: "medium",
    scenario: "What is the Scatter-Gather pattern?",
    options: [
      "A data collection pattern for IoT sensors scattered across locations",
      "Send the same request to multiple services in parallel (scatter), collect all responses, and merge them into a single result (gather) — used for aggregating data from multiple sources or parallel processing",
      "A deployment pattern that scatters services across regions",
      "A testing pattern that scatters test data and gathers results"
    ],
    correctOption: 1,
    answer: "Flow: (1) Scatter — request broadcaster sends the same (or partitioned) request to N workers/services concurrently, (2) Workers process independently and respond, (3) Gather — aggregator collects all responses, merges results (union, best-of, aggregate). Use cases: search (scatter query to index shards, gather results), price comparison (query multiple suppliers), map-reduce (scatter computation, gather results). Timeout: don't wait forever — return partial results if some workers are slow. Set a deadline and return whatever you have.",
    tips: "Google Search uses scatter-gather across thousands of index shards. Always set a timeout and handle partial results gracefully — returning 95% of results fast is better than 100% slow."
  },
  {
    id: 371, topic: "System Design", difficulty: "easy",
    scenario: "What is the difference between Encryption at Rest and Encryption in Transit?",
    options: [
      "Encryption at rest is for databases; Encryption in transit is for APIs",
      "Encryption at rest protects stored data (on disk/database) using AES-256; Encryption in transit protects data being transmitted over networks using TLS — both are needed for complete data protection",
      "Encryption at rest is stronger than encryption in transit",
      "You only need one or the other, not both"
    ],
    correctOption: 1,
    answer: "At rest: Data encrypted when stored on disk (S3 server-side encryption, database TDE, EBS encryption). Protects against: physical theft, unauthorized disk access, compromised backups. Algorithm: AES-256. Key management: AWS KMS, HashiCorp Vault. In transit: Data encrypted during network transmission (HTTPS/TLS, mTLS between services, VPN). Protects against: eavesdropping, man-in-the-middle, packet sniffing. Both needed: at rest protects storage, in transit protects communication. Compliance (HIPAA, GDPR, PCI) typically requires both.",
    tips: "Client-side encryption (encrypt before sending to server) adds a third layer — the server never sees plaintext. Used by end-to-end encrypted messaging and zero-knowledge cloud storage."
  },
  {
    id: 372, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a system to detect and prevent DDoS attacks?",
    options: [
      "Block all traffic from foreign countries",
      "Use multi-layer defense: anycast network absorption, CDN edge filtering, rate limiting, traffic analysis (ML-based anomaly detection), WAF rules, and auto-scaling — progressively filtering malicious traffic while allowing legitimate users through",
      "Add more servers to handle the extra traffic",
      "Use a firewall to block all suspicious IP addresses"
    ],
    correctOption: 1,
    answer: "Layers: (1) Network layer — anycast distributes attack across global PoPs (no single target), BGP blackholing for volumetric attacks, (2) Edge/CDN — Cloudflare/AWS Shield absorbs attack traffic, (3) Rate limiting — per-IP and per-endpoint limits, (4) WAF — block known attack patterns (SQL injection, malformed headers), challenge suspicious requests (CAPTCHA), (5) Traffic analysis — ML models detect anomalies (sudden traffic spike from unusual geo, request patterns), (6) Auto-scaling — absorb legitimate traffic spikes, (7) Application — graceful degradation, static fallback pages. Types: volumetric (flood bandwidth), protocol (SYN flood), application layer (slowloris, HTTP flood). Application layer is hardest to detect — looks like legitimate traffic.",
    tips: "Cloudflare handles 50M+ requests per second of DDoS traffic. Discuss the difference between L3/L4 attacks (infrastructure) and L7 attacks (application) and why L7 is harder — you need to understand the application to distinguish good from bad traffic."
  },
  {
    id: 373, topic: "System Design", difficulty: "medium",
    scenario: "What is Data Partitioning vs Data Replication?",
    options: [
      "Partitioning splits data; Replication copies data — but they serve the same purpose",
      "Partitioning distributes different subsets of data across nodes (each node has unique data) for scalability. Replication copies the same data across multiple nodes for availability and read scaling. They are complementary strategies",
      "Partitioning is for SQL; Replication is for NoSQL",
      "You should use one or the other, never both"
    ],
    correctOption: 1,
    answer: "Partitioning (sharding): Split data so each node has a different subset. Node A has users 1-1M, Node B has 1M-2M. Benefits: write scalability (parallel writes), larger total data capacity. Challenge: cross-partition queries, rebalancing. Replication: Copy the same data to multiple nodes. All replicas have users 1-2M. Benefits: read scalability (distribute reads), high availability (failover to replica). Challenge: consistency (replication lag), conflict resolution. Combined: Most distributed databases do both — partition data across shards AND replicate each shard. Cassandra, DynamoDB, CockroachDB all combine partitioning + replication.",
    tips: "Partitioning = scalability. Replication = availability. You almost always need both in a distributed database."
  },
  {
    id: 374, topic: "System Design", difficulty: "easy",
    scenario: "What is Zero Trust Architecture?",
    options: [
      "An architecture that trusts no external traffic but trusts everything inside the network",
      "A security model that assumes no user, device, or network is trusted by default — requiring continuous verification for every access request, even from inside the corporate network",
      "An architecture with zero security measures as a baseline",
      "A trust framework where services trust each other after initial handshake"
    ],
    correctOption: 1,
    answer: "Principles: (1) Never trust, always verify — authenticate and authorize every request regardless of source, (2) Least privilege — grant minimum required access, (3) Assume breach — design as if attackers are already inside. Implementation: mTLS between all services, identity-based access (not network-based), micro-segmentation (each service has its own access policies), continuous monitoring and anomaly detection, short-lived credentials (rotate frequently). Replaces: perimeter-based security (castle-and-moat) where everything inside the firewall was trusted.",
    tips: "Google's BeyondCorp is the pioneer of zero trust — employees access internal apps the same way as external users (no VPN needed). In Kubernetes, Istio service mesh implements zero trust with mTLS and RBAC policies."
  },
  {
    id: 375, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a data pipeline that ensures exactly-once processing?",
    options: [
      "Exactly-once is impossible in distributed systems",
      "Combine at-least-once delivery with idempotent processing: use transactional outbox for publishing, deduplication (inbox pattern) for consuming, and idempotency keys for side effects — achieving effectively exactly-once semantics",
      "Use TCP for message delivery since TCP guarantees exactly-once",
      "Process each message in a database transaction and roll back on failure"
    ],
    correctOption: 1,
    answer: "True exactly-once delivery is impossible in distributed systems (Two Generals' Problem). But effective exactly-once processing is achievable: (1) Publisher side — transactional outbox ensures event published iff business data committed, (2) Broker — Kafka supports exactly-once semantics via idempotent producers + transactional writes, (3) Consumer side — deduplication table (inbox pattern) stores processed message IDs, skip duplicates. If processing has side effects (send email, charge payment), use idempotency keys. Alternative: Kafka Streams/Flink support exactly-once within the stream processing framework (source → process → sink as one atomic operation).",
    tips: "The key insight: exactly-once = at-least-once delivery + idempotent processing. This is the industry standard approach. Kafka's exactly-once is between producers and consumers within Kafka — external side effects still need idempotency."
  },
  {
    id: 376, topic: "System Design", difficulty: "medium",
    scenario: "How does a Content Delivery Network handle cache invalidation when origin content changes?",
    options: [
      "CDNs automatically detect origin changes and update immediately",
      "CDNs use TTL-based expiration, purge APIs for immediate invalidation, and cache-busting URLs (versioned filenames) — balancing freshness with performance",
      "CDNs never invalidate — they always serve stale content",
      "CDNs re-fetch from origin on every request to stay fresh"
    ],
    correctOption: 1,
    answer: "Three main strategies: (1) TTL-based — set Cache-Control max-age, CDN serves cached version until TTL expires, then revalidates with origin (If-Modified-Since / ETag). Simple but content can be stale up to TTL duration. (2) Purge/Invalidate API — programmatically tell CDN to drop cached objects. CloudFront invalidations, Fastly instant purge, Akamai Fast Purge. Used for critical updates (price changes, security patches). (3) Cache-busting URLs — append version hash to filename (app.a3b2c1.js). New deploy = new URL = CDN treats as new object. Old cached version harmlessly expires. Best practice: long TTL + cache-busted URLs for static assets, short TTL + purge API for dynamic content.",
    tips: "Cache-busting URLs are the gold standard for static assets — infinite TTL with zero staleness risk. For HTML pages, use short TTL since you can't version the URL."
  },
  {
    id: 377, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed rate limiter that works across multiple data centers?",
    options: [
      "Use a single centralized Redis instance for all data centers",
      "Use local rate limiters with periodic synchronization, combining token bucket locally with gossip protocol or async replication to share counters — accepting slight over-admission during sync windows",
      "Rate limiting should only be done at the edge, never distributed",
      "Use database transactions to atomically update rate limit counters across regions"
    ],
    correctOption: 1,
    answer: "Challenge: a single global counter creates a SPOF and adds latency for remote DCs. Approach: (1) Local rate limiter per DC — each DC has its own token bucket/sliding window using local Redis, provides low-latency decisions. (2) Global synchronization — periodically share counters between DCs via gossip protocol or async replication (every 1-5 seconds). (3) Split budget — if global limit is 1000 req/s across 3 DCs, allocate ~333 to each. Adjust dynamically based on traffic patterns. (4) Sticky routing — route same client to same DC for more accurate per-client limits. Trade-off: during sync windows, total admitted requests may slightly exceed the global limit. For most use cases, this small over-admission is acceptable vs. the latency cost of synchronous global coordination.",
    tips: "Stripe and Cloudflare use this approach — local enforcement + async sync. The key insight is that rate limiting doesn't need to be perfectly precise, just approximately correct."
  },
  {
    id: 378, topic: "System Design", difficulty: "easy",
    scenario: "What is a reverse proxy and how does it differ from a forward proxy?",
    options: [
      "A reverse proxy acts on behalf of backend servers (clients don't know which server they hit), while a forward proxy acts on behalf of clients (servers don't know which client connected)",
      "A reverse proxy encrypts traffic; a forward proxy decrypts it",
      "They are the same thing with different names",
      "A forward proxy is faster than a reverse proxy"
    ],
    correctOption: 0,
    answer: "Forward proxy: sits between client and internet. Client knows it's using a proxy, server doesn't know the real client. Use cases: corporate internet filtering, anonymity (VPN), caching for clients. Reverse proxy: sits between internet and servers. Client doesn't know which backend server handles the request, servers are hidden. Use cases: load balancing (distribute traffic), SSL termination, caching, compression, security (hide server IPs, WAF). Examples: Nginx and HAProxy are primarily reverse proxies. Squid is primarily a forward proxy. Many proxies can do both.",
    tips: "Forward = protects clients. Reverse = protects servers. Nginx is the most popular reverse proxy — it handles load balancing, SSL, and static file serving."
  },
  {
    id: 379, topic: "System Design", difficulty: "medium",
    scenario: "What is the Saga pattern's compensation mechanism and when does it fail?",
    options: [
      "Compensation always perfectly undoes a transaction",
      "Compensation executes reverse operations for completed steps when a later step fails — but some actions are inherently non-compensatable (sent emails, physical shipments), requiring alternative strategies like alerting or manual intervention",
      "Compensation means retrying the failed step until it succeeds",
      "Compensation is only needed in orchestration-based sagas, not choreography"
    ],
    correctOption: 1,
    answer: "Saga compensation: when step N fails, execute compensating transactions for steps N-1, N-2, ... , 1 in reverse order. Examples: CreateOrder → ReserveInventory → ChargePayment. If ChargePayment fails: compensate by ReleaseInventory, then CancelOrder. Challenges: (1) Non-compensatable actions — once an email is sent or a package shipped, you can't truly undo it. Mitigation: delay irreversible actions to the end, or use 'semantic compensation' (send cancellation email). (2) Compensation itself can fail — need retry logic with idempotency for compensating transactions. (3) Ordering — compensations must execute in reverse order to avoid inconsistencies. (4) Pivot transaction — the step after which compensation is no longer possible (e.g., once money is transferred to external bank).",
    tips: "Design sagas so irreversible steps come last. The pivot transaction concept is critical — identify which step is the point of no return."
  },
  {
    id: 380, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time collaborative code editor like VS Code Live Share?",
    options: [
      "Lock the entire file when one user is editing, release when done",
      "Use Operational Transformation (OT) or CRDTs for conflict-free concurrent edits, with cursor awareness, syntax-aware merging, and WebSocket connections to a session server that broadcasts operations to all participants",
      "Send the entire file state to all users on every keystroke",
      "Use git merge for every edit operation"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Session server — manages active collaboration sessions, participant list, permissions. (2) Conflict resolution — OT transforms concurrent operations against each other (Google Docs approach), or CRDTs provide mathematically guaranteed convergence without central coordination (Y.js, Automerge). (3) Transport — WebSocket for low-latency bidirectional communication. Each keystroke generates an operation (insert char at position X, delete range Y-Z). (4) Cursor awareness — broadcast each user's cursor position and selection range, show colored cursors. (5) Syntax awareness — merge operations must respect language grammar (don't split tokens mid-edit). (6) Persistence — periodically snapshot document state, replay operations from snapshot for late joiners. (7) Access control — host controls who can edit vs. read-only. Scale: one session server per room (no need for distributed state for a single document with <50 collaborators).",
    tips: "CRDTs are becoming the standard over OT — they're more complex to implement but don't need a central server for conflict resolution. Y.js is the most popular CRDT library for collaborative editing."
  },
  {
    id: 381, topic: "System Design", difficulty: "easy",
    scenario: "What is database connection pooling and why is it important?",
    options: [
      "It means connecting to the database only once and never disconnecting",
      "Connection pooling maintains a cache of reusable database connections, avoiding the overhead of creating a new TCP connection, TLS handshake, and authentication for every query",
      "It pools multiple databases into one logical connection",
      "Connection pooling slows down queries but improves security"
    ],
    correctOption: 1,
    answer: "Problem: creating a database connection is expensive — TCP handshake (1 RTT), TLS handshake (1-2 RTTs), authentication, server process allocation. At 100+ requests/second, this overhead is unacceptable. Solution: connection pool maintains N pre-established connections. Application borrows a connection, executes query, returns it to the pool. Key parameters: (1) Min pool size — always keep this many connections ready, (2) Max pool size — upper limit to prevent overloading the DB, (3) Idle timeout — close connections unused for too long, (4) Connection lifetime — recycle connections periodically to handle DB failover. Popular pools: HikariCP (Java, fastest), pgBouncer (PostgreSQL, external pooler), PgPool-II. Rule of thumb: optimal pool size ≈ (CPU cores × 2) + disk spindles.",
    tips: "HikariCP is the default in Spring Boot. A common mistake is setting the pool too large — more connections doesn't mean more performance. PostgreSQL recommends max_connections = 100-300."
  },
  {
    id: 382, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between vertical scaling and horizontal scaling, and when would you choose each?",
    options: [
      "Vertical = bigger machine, horizontal = more machines. Vertical is simpler but has a ceiling; horizontal is more complex but virtually unlimited",
      "Vertical scaling is always better because it avoids distributed system complexity",
      "Horizontal scaling means upgrading hardware; vertical means adding more servers",
      "They are the same concept with different names"
    ],
    correctOption: 0,
    answer: "Vertical scaling (scale up): add more CPU, RAM, disk to a single machine. Pros: no code changes, no distributed complexity, strong consistency. Cons: hardware ceiling (biggest AWS instance is 24TB RAM), single point of failure, expensive at high end, downtime for upgrades. Horizontal scaling (scale out): add more machines behind a load balancer. Pros: virtually unlimited scale, fault tolerance (one node fails, others continue), cost-effective (commodity hardware). Cons: distributed system complexity (consistency, network partitions), application must be stateless or handle distributed state. When to choose: Start vertical until you hit a ceiling or need high availability. Go horizontal when: you need fault tolerance, traffic exceeds single-machine capacity, or you need geographic distribution. Most production systems use both — vertically scaled individual nodes, horizontally scaled across multiple nodes.",
    tips: "The real-world answer is almost always 'both' — right-size your instances (vertical) and run multiple of them (horizontal). Databases are harder to scale horizontally than stateless services."
  },
  {
    id: 383, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a system to detect and prevent duplicate payments in a high-throughput payment platform?",
    options: [
      "Check if the payment amount already exists in the database",
      "Use idempotency keys: clients send a unique key per payment intent, server stores key→result mapping, and returns cached result for duplicate keys — combined with database constraints and distributed locking for concurrent requests",
      "Block all concurrent requests from the same user",
      "Use eventual consistency and resolve duplicates later"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Idempotency key — client generates UUID per payment intent, sends in header (Idempotency-Key). Server checks if key exists before processing. (2) Storage — dedicated idempotency table: (key, status, response, created_at) with unique constraint on key. (3) Concurrent handling — when two requests arrive with same key simultaneously: first request acquires distributed lock (Redis SETNX with TTL), processes payment, stores result. Second request waits for lock, then returns cached result. (4) Database constraints — unique constraint on (merchant_id, client_reference_id) as a safety net. (5) Status machine — idempotency record goes through: created → processing → completed/failed. If status is 'processing' and TTL expired, allow retry (original may have crashed). (6) Cleanup — expire idempotency records after 24-48 hours. Stripe's approach: Idempotency-Key header, 24-hour window, returns original response for duplicates.",
    tips: "Stripe's idempotency implementation is the gold standard — study their API docs. The key insight: idempotency must be end-to-end, from client to the final database write."
  },
  {
    id: 384, topic: "System Design", difficulty: "easy",
    scenario: "What is DNS and how does domain name resolution work?",
    options: [
      "DNS directly routes network traffic to the correct server",
      "DNS translates human-readable domain names to IP addresses through a hierarchical lookup: browser cache → OS cache → recursive resolver → root server → TLD server → authoritative server",
      "DNS is a database that stores website content",
      "DNS only works for HTTP traffic, not other protocols"
    ],
    correctOption: 1,
    answer: "DNS resolution steps: (1) Browser cache — check if domain was recently resolved, (2) OS cache — check system DNS cache (hosts file, systemd-resolved), (3) Recursive resolver — ISP's DNS server (or 8.8.8.8, 1.1.1.1), checks its cache, (4) Root server — 13 root server clusters worldwide, directs to TLD server (.com, .org, .io), (5) TLD server — directs to authoritative nameserver for the domain, (6) Authoritative server — returns the actual IP address (A record for IPv4, AAAA for IPv6). Record types: A (IP address), CNAME (alias to another domain), MX (mail server), TXT (verification, SPF), NS (nameserver delegation). TTL controls how long resolvers cache the result. Typical resolution: 20-120ms for uncached, <1ms for cached.",
    tips: "Understanding DNS is critical for system design — it's the foundation of how the internet works. DNS-based load balancing (Route 53, GeoDNS) is a common pattern for multi-region architectures."
  },
  {
    id: 385, topic: "System Design", difficulty: "medium",
    scenario: "How do you design an effective health check system for microservices?",
    options: [
      "Just check if the service process is running",
      "Implement multi-layer health checks: liveness (process alive), readiness (can handle traffic), and deep checks (dependencies reachable) — with appropriate timeouts, intervals, and circuit breakers to prevent cascading failures from dependency checks",
      "Ping the service every second and restart if no response",
      "Health checks are unnecessary if you have good logging"
    ],
    correctOption: 1,
    answer: "Three layers: (1) Liveness — is the process alive and not deadlocked? Simple HTTP 200 response. Kubernetes uses this to decide whether to restart the pod. Keep it lightweight — no dependency checks. (2) Readiness — can the service handle traffic? Checks: database connection pool has available connections, required caches are warm, configuration is loaded. Kubernetes uses this to add/remove from load balancer. (3) Deep/dependency checks — are downstream services reachable? Check database, cache, message queue, critical APIs. Use sparingly — a dependency being slow shouldn't make your service 'unhealthy'. Best practices: separate endpoints (/health/live, /health/ready), timeout health checks (don't let a slow DB query block the check), cache dependency check results (don't DDoS your database with health checks), include version and uptime in response for debugging.",
    tips: "The biggest mistake: putting dependency checks in the liveness probe. If your database is slow, your service shouldn't be killed and restarted — it should stop receiving traffic (readiness) while staying alive."
  },
  {
    id: 386, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a globally distributed database with strong consistency?",
    options: [
      "Strong consistency is impossible in a distributed database",
      "Use synchronized clocks (TrueTime/atomic clocks) with consensus protocols: commit timestamps are globally ordered, reads wait for uncertainty window to pass, and Paxos/Raft ensures replicas agree — achieving external consistency at the cost of higher write latency",
      "Use eventual consistency and call it strong consistency",
      "Replicate synchronously to all nodes before acknowledging writes"
    ],
    correctOption: 1,
    answer: "Google Spanner's approach: (1) TrueTime API — GPS + atomic clocks in every data center provide globally synchronized time with bounded uncertainty (typically <7ms). (2) Commit wait — after committing a transaction, wait for the uncertainty interval to pass before making it visible. This guarantees that any subsequent transaction sees this commit. (3) Paxos groups — data is partitioned into splits, each replicated via Paxos across zones/regions. Writes require majority quorum. (4) Two-phase commit across Paxos groups — for transactions spanning multiple splits. (5) Lock-free read-only transactions — reads at a timestamp can be served from any sufficiently up-to-date replica without locks. Trade-offs: higher write latency (cross-region Paxos + commit wait), expensive infrastructure (atomic clocks), but you get: linearizability, SQL, ACID transactions, global scale. CockroachDB achieves similar guarantees using hybrid logical clocks (software-only, no atomic clocks) with slightly weaker ordering guarantees.",
    tips: "Spanner is the only production system that provides external consistency (strongest possible) at global scale. CockroachDB is the open-source alternative with similar design but uses HLC instead of TrueTime."
  },
  {
    id: 387, topic: "System Design", difficulty: "easy",
    scenario: "What is a message broker and when should you use one?",
    options: [
      "A message broker is a middleware that decouples producers and consumers, enabling asynchronous communication, buffering, and reliable message delivery between services",
      "A message broker is a type of database for storing messages permanently",
      "Message brokers are only used for email systems",
      "A message broker replaces all API calls between services"
    ],
    correctOption: 0,
    answer: "A message broker sits between services: producers send messages to the broker, consumers read from it. Benefits: (1) Decoupling — producers don't need to know about consumers (add/remove consumers without changing producers), (2) Buffering — handle traffic spikes (broker queues messages when consumers are slow), (3) Reliability — messages persist until consumed (survive service restarts), (4) Fan-out — one message can be consumed by multiple services. When to use: asynchronous workflows (order placed → send email + update inventory + notify warehouse), workload leveling (smooth out traffic spikes), event-driven architectures. Popular brokers: RabbitMQ (traditional message queue, AMQP), Apache Kafka (distributed log, high throughput), AWS SQS (managed queue). When NOT to use: synchronous request-response patterns, simple point-to-point communication where HTTP is sufficient.",
    tips: "Kafka vs RabbitMQ: Kafka is better for high-throughput event streaming and replay. RabbitMQ is better for traditional task queues with complex routing. SQS is the easiest if you're on AWS."
  },
  {
    id: 388, topic: "System Design", difficulty: "medium",
    scenario: "What is the Strangler Fig pattern and how do you implement it safely?",
    options: [
      "Rewrite the entire legacy system at once and switch over",
      "Incrementally replace legacy system components by routing traffic through a facade — new requests go to the new system, legacy handles remaining features, until the old system is fully replaced",
      "Run legacy and new systems forever in parallel",
      "Strangle the old system by cutting off its resources until it fails"
    ],
    correctOption: 1,
    answer: "Named after strangler fig trees that grow around host trees. Steps: (1) Identify — pick a bounded feature/API of the legacy system to migrate first (start with low-risk, well-understood areas). (2) Build — implement the feature in the new system alongside the legacy system. (3) Route — use a facade/proxy (API gateway, reverse proxy) to route requests. Initially all traffic goes to legacy. Gradually shift: 1% → 10% → 50% → 100% to new system for that feature. (4) Monitor — compare responses between old and new systems (shadow traffic). Track error rates, latency, business metrics. (5) Retire — once confident, remove the legacy code for that feature. (6) Repeat — pick the next feature. Safety measures: feature flags for instant rollback, shadow testing (send traffic to both, compare results), comprehensive monitoring, database migration strategy (shared database initially, separate later).",
    tips: "Martin Fowler coined this pattern. The key is the facade — it gives you a single control point for routing. Start with read-only endpoints (lowest risk) before migrating write operations."
  },
  {
    id: 389, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a low-latency ad serving system that handles millions of bid requests per second?",
    options: [
      "Use a standard REST API with database lookups for each request",
      "Use in-memory data structures with pre-computed targeting indexes, parallel bid evaluation, strict latency budgets (100ms total), edge caching of creative assets, and probabilistic data structures for frequency capping",
      "Queue all ad requests and process them in batches",
      "Serve the same ad to everyone to avoid computation"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Request path — ad request arrives at edge (CDN/PoP), routed to nearest ad server cluster. Total latency budget: ~100ms. (2) User profile lookup — in-memory cache (Redis cluster) with user segments, interests, frequency caps. Pre-computed at user login/activity time, not at request time. (3) Campaign matching — inverted index in memory: segment → eligible campaigns. Bloom filters for negative targeting (exclude users who already converted). (4) Bid evaluation — parallel evaluation of eligible campaigns against budget, pacing, frequency caps. Top-K selection using priority queue. (5) Creative selection — A/B test creative variants, serve from CDN (pre-cached). (6) Auction — if RTB (Real-Time Bidding), fan out to DSPs with 50ms timeout, select winner. (7) Frequency capping — probabilistic counting (Count-Min Sketch) per user per campaign, synced asynchronously. (8) Logging — async event logging (Kafka) for billing, analytics, fraud detection. Scale: millions QPS requires stateless servers, sharded user data, and aggressive caching.",
    tips: "Ad tech is one of the most latency-sensitive systems in tech. The key insight: pre-compute everything possible offline, minimize real-time computation to index lookups and arithmetic."
  },
  {
    id: 390, topic: "System Design", difficulty: "easy",
    scenario: "What is the difference between authentication and authorization?",
    options: [
      "Authentication verifies WHO you are (identity), authorization determines WHAT you can do (permissions) — authentication always comes first",
      "Authentication and authorization are the same thing",
      "Authorization verifies identity; authentication grants permissions",
      "Authentication is for APIs; authorization is for web applications"
    ],
    correctOption: 0,
    answer: "Authentication (AuthN): verifying identity. 'Are you who you claim to be?' Methods: passwords, MFA, biometrics, certificates, SSO tokens. Result: a verified identity (user ID, email). Authorization (AuthZ): verifying permissions. 'Are you allowed to do this?' Methods: RBAC (role-based), ABAC (attribute-based), ACLs, policies. Result: allow or deny. Flow: authenticate first → get identity → check authorization with that identity. Examples: (1) Login with password = authentication. Checking if user has 'admin' role to delete posts = authorization. (2) OAuth: authentication happens at the identity provider, authorization is encoded in the access token's scopes. Common patterns: JWT tokens carry both — identity claims (sub, email) and authorization claims (roles, permissions).",
    tips: "Remember: AuthN = 'who are you?' AuthZ = 'what can you do?' A common interview mistake is conflating them. OAuth 2.0 is an authorization framework, OpenID Connect adds authentication on top."
  },
  {
    id: 391, topic: "System Design", difficulty: "medium",
    scenario: "How does consistent hashing handle hotspot keys (celebrity problem)?",
    options: [
      "Consistent hashing automatically balances hotspot keys",
      "Use virtual nodes for general distribution, but for true hotspots: replicate hot keys to multiple nodes, use local caching layers, split hot keys into sub-keys, or route hot keys to dedicated high-capacity nodes",
      "Remove the hot key from the hash ring",
      "Increase the number of physical nodes to handle the load"
    ],
    correctOption: 1,
    answer: "Problem: consistent hashing distributes keys evenly in general, but a single viral key (celebrity tweet, flash sale item) creates a hotspot regardless of distribution. Solutions: (1) Key replication — replicate hot key's data to N successor nodes on the ring, route reads randomly among them. (2) Sub-key splitting — split 'celebrity:123' into 'celebrity:123:shard0', 'celebrity:123:shard1', etc. Each sub-key lands on a different node. Read from random shard. (3) Local caching — L1 cache on application servers with short TTL. Most reads never hit the distributed cache. (4) Dedicated nodes — identify hot keys (monitoring/prediction), route to beefier hardware. (5) Read replicas — for cache systems like Redis, add read replicas for hot key ranges. Detection: monitor key access frequency, set threshold alerts. Instagram/Twitter approach: pre-warm caches for known celebrities, auto-detect emerging hotspots.",
    tips: "This is a common follow-up question after consistent hashing. The interviewer wants to know you understand that consistent hashing solves distribution but not hotspots. Sub-key splitting is the most common production solution."
  },
  {
    id: 392, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a distributed tracing system like Jaeger or Zipkin?",
    options: [
      "Log timestamps at each service and correlate them manually",
      "Propagate a unique trace ID and span IDs through request headers, collect span data asynchronously via agents, store in a time-series/columnar database, and provide a query UI for visualizing request flows across services",
      "Use centralized logging and grep for request patterns",
      "Monitor only the entry and exit points of the system"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Instrumentation — each service creates spans (start time, end time, operation name, tags). First service creates the trace ID, subsequent services propagate it via headers (e.g., uber-trace-id, traceparent). Parent-child span relationships form a tree. (2) Collection — sidecar agents (Jaeger agent) on each host collect spans over UDP (fire-and-forget, minimal latency impact). Agents batch and forward to collectors. (3) Collectors — receive spans, validate, enrich (add service name, host), write to storage. (4) Storage — Cassandra or Elasticsearch for span data. Indexed by trace ID, service name, operation, duration, tags. (5) Query service — API to retrieve traces by ID, search by service/operation/duration/tags. (6) UI — waterfall visualization showing spans as horizontal bars on a timeline, revealing latency bottlenecks. Sampling: at high throughput, trace a percentage of requests (1% adaptive sampling). Head-based (decide at entry) vs. tail-based (decide after seeing full trace — capture interesting/slow traces). OpenTelemetry is the standard for instrumentation.",
    tips: "OpenTelemetry has become the industry standard — it unified OpenTracing and OpenCensus. In interviews, mention the three pillars of observability: logs, metrics, and traces."
  },
  {
    id: 393, topic: "System Design", difficulty: "easy",
    scenario: "What is a load balancer and what are the common load balancing algorithms?",
    options: [
      "A load balancer distributes incoming traffic across multiple servers using algorithms like round-robin, least connections, weighted, IP hash, and least response time",
      "A load balancer only works with HTTP traffic",
      "Load balancers just redirect traffic to the fastest server",
      "A load balancer is a type of firewall"
    ],
    correctOption: 0,
    answer: "A load balancer distributes traffic across backend servers to prevent overload and provide high availability. Algorithms: (1) Round-robin — requests go to servers in rotation (1→2→3→1→2→3). Simple, works when servers are identical. (2) Weighted round-robin — servers get proportional traffic based on capacity (powerful server gets 3x traffic). (3) Least connections — route to the server with fewest active connections. Good for long-lived connections (WebSocket). (4) IP hash — hash client IP to consistently route to same server (session affinity). (5) Least response time — route to the server responding fastest. (6) Random — surprisingly effective at scale. Types: L4 (transport layer, routes TCP/UDP by IP+port, fast) vs L7 (application layer, routes by HTTP headers/URL/cookies, flexible). Examples: AWS ALB (L7), NLB (L4), Nginx, HAProxy.",
    tips: "L4 vs L7 is a common interview question. L7 can do content-based routing (send /api to backend A, /static to backend B), SSL termination, and header manipulation. L4 is faster but less flexible."
  },
  {
    id: 394, topic: "System Design", difficulty: "medium",
    scenario: "How do you handle schema evolution in event-driven systems?",
    options: [
      "Never change event schemas once published",
      "Use schema registries with compatibility rules (backward, forward, full), versioned schemas (Avro/Protobuf), and consumer-driven contract testing — allowing producers and consumers to evolve independently",
      "Just use JSON and hope consumers handle missing fields",
      "Version the entire event stream for each schema change"
    ],
    correctOption: 1,
    answer: "Challenge: producers and consumers deploy independently. If event schema changes, consumers may break. Solutions: (1) Schema registry (Confluent Schema Registry) — centralized store of versioned schemas. Producers register schemas, consumers fetch them. Registry enforces compatibility: Backward compatible (new schema can read old data — safe for consumers to upgrade first), Forward compatible (old schema can read new data — safe for producers to upgrade first), Full compatible (both). (2) Serialization format — Avro (schema evolution built-in, compact binary), Protobuf (field numbers enable evolution, skip unknown fields), JSON Schema (human-readable but larger). (3) Rules: always add optional fields (never required), never remove fields (deprecate instead), never change field types, use default values for new fields. (4) Consumer-driven contracts — consumers define what fields they need, producers ensure those contracts are met (Pact testing). (5) Versioned topics — for breaking changes, create a new topic (events.v2) and run both during migration.",
    tips: "Avro + Schema Registry is the Kafka ecosystem standard. The golden rule: make additive changes only. If you need a breaking change, create a new event type rather than modifying the existing one."
  },
  {
    id: 395, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a multi-region active-active database architecture?",
    options: [
      "Use synchronous replication between all regions",
      "Use conflict-free replicated data types (CRDTs) or last-writer-wins with logical clocks for conflict resolution, async replication between regions, and region-aware routing — accepting eventual consistency for cross-region data while maintaining strong consistency within each region",
      "Just use a single region with a CDN for global access",
      "Shard data by region so each region only has its own data"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Local writes — each region accepts writes to its local database. Low latency for users (writes don't cross regions). (2) Async replication — changes replicate to other regions asynchronously (50-200ms). During this window, regions may have slightly different data (eventual consistency). (3) Conflict resolution — when two regions modify the same record: Last-Writer-Wins (LWW) with hybrid logical clocks (simple but may lose data), CRDTs (counters, sets that merge automatically without conflicts), application-level resolution (merge strategies specific to business logic). (4) Region-aware routing — GeoDNS or anycast routes users to nearest region. Sticky sessions keep user on same region for consistency. (5) Conflict-free design — structure data to minimize conflicts: append-only events, per-user partitioning, reservation-based systems. (6) Global tables — DynamoDB Global Tables, CockroachDB multi-region, Cassandra with NetworkTopologyStrategy. Trade-off: you sacrifice strong consistency for availability and low latency (choosing AP in CAP theorem).",
    tips: "DynamoDB Global Tables is the easiest way to go active-active. The key design principle: minimize conflicts by partitioning data naturally (user data belongs to user's home region) and using conflict-free data structures where possible."
  },
  {
    id: 396, topic: "System Design", difficulty: "easy",
    scenario: "What is caching and what are the common caching strategies?",
    options: [
      "Caching stores frequently accessed data in a faster storage layer. Common strategies: cache-aside (lazy), write-through, write-behind, and read-through — each with different consistency and performance trade-offs",
      "Caching means storing all data in memory permanently",
      "There is only one caching strategy — store everything in Redis",
      "Caching is only useful for static content like images"
    ],
    correctOption: 0,
    answer: "Caching strategies: (1) Cache-aside (lazy loading) — app checks cache first, on miss reads from DB and populates cache. Most common. Pro: only caches what's actually requested. Con: cache miss = 3 trips (check cache, read DB, write cache). (2) Read-through — cache itself loads from DB on miss (cache is aware of DB). Pro: simpler application code. Con: cache library must support it. (3) Write-through — writes go to cache AND DB synchronously. Pro: cache is always consistent. Con: write latency (two writes per operation). (4) Write-behind (write-back) — writes go to cache only, cache asynchronously writes to DB. Pro: fast writes. Con: data loss risk if cache crashes before writing to DB. (5) Write-around — writes go directly to DB, bypassing cache. Pro: avoids caching infrequently read data. Con: cache miss on subsequent reads. Cache layers: L1 (in-process, HashMap), L2 (distributed, Redis/Memcached), CDN (edge caching for static assets).",
    tips: "Cache-aside + write-around is the most common combination. For write-heavy workloads, consider write-behind. Always set TTL to prevent stale data accumulation."
  },
  {
    id: 397, topic: "System Design", difficulty: "medium",
    scenario: "What is backpressure in distributed systems and how do you implement it?",
    options: [
      "Backpressure means rejecting all traffic when the system is busy",
      "Backpressure is a flow control mechanism where downstream consumers signal upstream producers to slow down when overwhelmed — implemented via bounded queues, rate limiting, reactive streams, or credit-based flow control",
      "Backpressure is only relevant for streaming data",
      "Backpressure means adding more servers to handle the load"
    ],
    correctOption: 1,
    answer: "Problem: if producer is faster than consumer, unbounded queues grow until OOM. Without backpressure: cascading failures. Implementation strategies: (1) Bounded queues — queue has max capacity, producer blocks or gets rejected when full. Kafka: producer receives errors when broker is overloaded. (2) Rate limiting — explicitly limit producer throughput to match consumer capacity. (3) Reactive streams — Project Reactor/RxJava: consumer requests N items, producer sends at most N (demand-driven). (4) Credit-based — consumer sends credits (I can handle 100 more), producer sends up to credit limit. Used in AMQP, TCP flow control. (5) Load shedding — when overwhelmed, drop low-priority requests (return 503) to protect high-priority ones. (6) Dynamic scaling — auto-scale consumers when queue depth exceeds threshold (reactive, not preventive). Best practice: combine bounded queues + monitoring + auto-scaling. Alert when queue depth consistently grows.",
    tips: "Backpressure is about protecting the consumer, not the producer. Without it, the consumer crashes and you lose everything. TCP has built-in backpressure (window size) — the same principle applies at the application level."
  },
  {
    id: 398, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a notification system that handles billions of notifications per day across push, SMS, and email channels?",
    options: [
      "Send notifications synchronously from the application server",
      "Use a multi-stage pipeline: intake service validates and deduplicates, priority queues route by urgency and channel, per-channel workers handle delivery with provider failover, and a feedback loop tracks delivery status with exponential backoff retries",
      "Use a single queue for all notification types",
      "Batch all notifications and send them once per hour"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Intake service — accepts notification requests via API or events, validates (user exists, channel available, not opted out), deduplicates (idempotency key), enriches (resolve user preferences, templates). (2) Priority classification — P0 (security alerts, OTP) → high-priority queue, P1 (order updates) → normal queue, P2 (marketing) → low-priority queue with rate limiting. (3) Channel routing — user preference service: which channels per notification type. Fan-out to channel-specific queues (push, SMS, email). (4) Channel workers — Push: APNs (iOS), FCM (Android) — maintain persistent connections, batch sends. SMS: provider abstraction (Twilio, SNS) with failover. Email: SES/SendGrid with template rendering, DKIM/SPF. (5) Delivery tracking — webhook callbacks from providers, store delivery status. (6) Retry — exponential backoff with jitter, DLQ for permanent failures. (7) Rate limiting — per-user (max 5 push/hour), per-channel (provider rate limits), global (protect downstream). (8) Analytics — delivery rate, open rate, click rate per channel/template. Scale: partition by user ID, each channel scales independently.",
    tips: "The key architectural insight: separate the 'what to send' (intake) from 'how to send' (channel workers). This lets each channel scale independently and swap providers without changing business logic."
  },
  {
    id: 399, topic: "System Design", difficulty: "easy",
    scenario: "What is an API Gateway and what problems does it solve?",
    options: [
      "An API Gateway is a single entry point for all client requests that handles cross-cutting concerns like authentication, rate limiting, routing, and protocol translation — so individual services don't have to",
      "An API Gateway is just a load balancer with a different name",
      "API Gateways are only needed for microservices with more than 100 services",
      "An API Gateway replaces service-to-service communication"
    ],
    correctOption: 0,
    answer: "An API Gateway sits between clients and backend services. Responsibilities: (1) Request routing — route /users to user service, /orders to order service. (2) Authentication/Authorization — validate JWT tokens, API keys centrally (services trust the gateway). (3) Rate limiting — protect backends from abuse, per-client quotas. (4) Protocol translation — REST to gRPC, WebSocket upgrade, GraphQL to REST. (5) Request/response transformation — aggregate multiple service calls into one client response (BFF pattern). (6) Caching — cache common responses at the edge. (7) Monitoring — centralized logging, metrics, tracing for all API traffic. (8) SSL termination — handle HTTPS at the gateway, HTTP internally. Examples: Kong, AWS API Gateway, Nginx, Envoy, Spring Cloud Gateway. Without a gateway, every service must implement auth, rate limiting, logging — duplicated effort and inconsistent behavior.",
    tips: "The API Gateway pattern is almost universal in microservices. But beware: the gateway can become a bottleneck and single point of failure. Use multiple gateway instances behind a load balancer."
  },
  {
    id: 400, topic: "System Design", difficulty: "medium",
    scenario: "How do you implement distributed transactions across microservices without two-phase commit?",
    options: [
      "Use a shared database for all services",
      "Use the Saga pattern — break the transaction into local transactions, each publishing an event or being orchestrated by a coordinator, with compensating transactions for rollback instead of distributed locking",
      "Two-phase commit is the only way to handle distributed transactions",
      "Avoid transactions entirely in microservices"
    ],
    correctOption: 1,
    answer: "Why not 2PC: holds locks across services (high latency, blocks resources), any participant failure blocks the entire transaction, doesn't scale. Saga pattern: sequence of local transactions, each followed by an event. If step N fails, compensate steps N-1 through 1. Two variants: (1) Choreography — each service listens for events and acts. OrderService creates order → emits OrderCreated → InventoryService reserves stock → emits StockReserved → PaymentService charges → emits PaymentCompleted. On failure, reverse events trigger compensation. Pro: decoupled, simple. Con: hard to trace, can become spaghetti. (2) Orchestration — central coordinator (Saga orchestrator) directs each step. Orchestrator calls services in sequence, handles failures by calling compensations. Pro: clear flow, easy to understand. Con: orchestrator is a single point of coordination. Other patterns: Outbox pattern (reliable event publishing), idempotent consumers (handle duplicates). Choose orchestration for complex flows (5+ steps), choreography for simple flows (2-3 steps).",
    tips: "Sagas provide eventual consistency, not ACID. If you need strong consistency for a critical operation (e.g., money transfer), consider keeping those operations in a single service with a local transaction."
  },
  {
    id: 401, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a system for handling flash sales (millions of users competing for limited inventory)?",
    options: [
      "Use a standard e-commerce checkout flow with database-level stock checks",
      "Use multiple layers: CDN for static content, virtual queue with waiting room, pre-decremented inventory tokens in Redis, optimistic locking for order creation, and async order processing — separating intent capture from fulfillment",
      "Just overprovision servers to handle the spike",
      "First-come-first-served with database row locking"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Pre-sale — pre-warm CDN with product pages (static), pre-load inventory counts into Redis. (2) Waiting room — when traffic exceeds threshold, queue users in a virtual waiting room (CloudFlare Waiting Room pattern). Issue time-based tokens, admit in batches. Prevents thundering herd. (3) Intent capture — user clicks 'Buy'. Redis DECR on inventory counter (atomic, O(1)). If counter > 0, issue a purchase token (JWT with TTL). If ≤ 0, show 'sold out'. This is the critical bottleneck — must be sub-millisecond. (4) Order creation — user with valid token proceeds to checkout. Optimistic locking on order table (check token validity, not already used). (5) Payment — async processing. Hold inventory for 10 minutes while payment processes. Release on timeout. (6) Overselling protection — Redis counter is the single source of truth for available stock. Database stock is eventually consistent. (7) Scale: Redis single-key operations handle 100K+ ops/sec. Shard by product ID for multiple flash sales. Bot prevention: CAPTCHA, device fingerprinting, rate limiting per user.",
    tips: "The key insight: separate 'do you get to buy?' (Redis atomic decrement, microseconds) from 'complete the purchase' (traditional checkout, seconds). This dramatically reduces the contention window."
  },
  {
    id: 402, topic: "System Design", difficulty: "easy",
    scenario: "What is microservices architecture and when should you NOT use it?",
    options: [
      "Microservices decompose an application into small, independently deployable services. Avoid when: small team, simple domain, early-stage product, or when the distributed systems overhead outweighs the benefits",
      "Microservices should always be used for any production application",
      "Microservices means splitting every function into its own service",
      "Microservices only work with Docker and Kubernetes"
    ],
    correctOption: 0,
    answer: "Microservices: each service owns its domain, data, and deployment lifecycle. Benefits: independent scaling, technology diversity, team autonomy, fault isolation, faster deployments. When NOT to use: (1) Small team (<5 developers) — overhead of managing distributed systems exceeds benefits. (2) Simple domain — if a monolith serves your needs, don't add complexity. (3) Early-stage startup — domain boundaries are unclear, premature decomposition leads to wrong boundaries. (4) Tight coupling — if services would need synchronous calls for every operation, you haven't found proper boundaries. (5) No DevOps maturity — need CI/CD, monitoring, logging infrastructure. Costs: network latency, distributed transactions (sagas), operational complexity (monitoring 50 services vs 1), data consistency challenges, debugging across services. Start monolithic, extract microservices when: team is too large for monolith, specific component needs independent scaling, deployment conflicts become frequent.",
    tips: "The monolith-first approach is widely recommended (Martin Fowler). Extract services when you feel the pain, not before. A well-structured monolith is better than poorly designed microservices."
  },
  {
    id: 403, topic: "System Design", difficulty: "medium",
    scenario: "How do you design an effective retry strategy for distributed systems?",
    options: [
      "Retry immediately and indefinitely until it succeeds",
      "Use exponential backoff with jitter, set max retries, distinguish retryable vs non-retryable errors, implement circuit breakers for sustained failures, and use idempotency keys to prevent duplicate side effects",
      "Never retry — if it failed once, it will fail again",
      "Wait a fixed 5 seconds between each retry"
    ],
    correctOption: 1,
    answer: "Strategy: (1) Classify errors — 4xx client errors (400, 404) are NOT retryable (fix the request). 5xx server errors (500, 503) and timeouts ARE retryable. Network errors (connection refused, DNS failure) are retryable. (2) Exponential backoff — delay = base × 2^attempt. 100ms → 200ms → 400ms → 800ms. Prevents thundering herd on recovering services. (3) Jitter — add random delay: delay = random(0, base × 2^attempt). Decorrelated jitter is even better. Prevents synchronized retry storms. (4) Max retries — cap at 3-5 attempts. Total retry budget: don't spend more time retrying than the original timeout. (5) Circuit breaker — after N consecutive failures, stop retrying for a cooldown period (open circuit). Prevents wasting resources on a definitely-down service. (6) Idempotency — retries may cause duplicate processing. Use idempotency keys so the server recognizes duplicate requests. (7) Retry budget — limit retries to 10% of total requests (Google SRE recommendation). If more than 10% are retrying, the downstream is overwhelmed.",
    tips: "The 10% retry budget from Google SRE is crucial — without it, retries can amplify a failure. If 50% of requests fail and all retry 3x, you're sending 2.5x normal traffic to an already struggling service."
  },
  {
    id: 404, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time fraud detection system for financial transactions?",
    options: [
      "Run batch analysis on transactions nightly and flag suspicious ones",
      "Use a streaming pipeline with rule engine + ML models: transactions flow through Kafka, are enriched with user profiles and velocity counters in real-time, scored by ML models within milliseconds, and routed to approve/review/block queues based on risk score",
      "Block all transactions above a certain amount",
      "Rely on users to report fraudulent transactions"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Ingestion — every transaction → Kafka topic (high throughput, ordered per account). (2) Enrichment — stream processor (Flink/Kafka Streams) enriches with: user profile (device, location, typical behavior), velocity counters (transactions in last 1min/1hr/24hr, amount thresholds), merchant risk scores, geolocation (impossible travel detection). (3) Rule engine — deterministic rules: amount > $10K → flag, international + no travel history → flag, >5 transactions in 1 minute → flag. Fast, explainable, easy to update. (4) ML scoring — features: transaction amount, time of day, merchant category, device fingerprint, behavioral biometrics. Models: gradient boosted trees (XGBoost) for tabular data, neural networks for sequential patterns. Score: 0-1 probability of fraud. (5) Decision — combine rule flags + ML score. Low risk (score < 0.3) → auto-approve. Medium (0.3-0.7) → human review queue. High (>0.7) → auto-block + alert user. (6) Feedback loop — analyst decisions feed back as training data. Model retrained daily/weekly. Latency budget: <100ms from transaction to decision. (7) Batch layer — nightly batch analysis for pattern discovery, model training, graph analysis (fraud rings).",
    tips: "The Lambda architecture (real-time stream + batch) is common in fraud detection. Rules catch known fraud patterns instantly, ML catches novel patterns. Both are needed — rules for speed and explainability, ML for sophistication."
  },
  {
    id: 405, topic: "System Design", difficulty: "easy",
    scenario: "What is eventual consistency and how does it differ from strong consistency?",
    options: [
      "Eventual consistency guarantees that if no new updates are made, all replicas will eventually converge to the same value — while strong consistency guarantees every read returns the most recent write immediately",
      "Eventual consistency means data might never be consistent",
      "Strong consistency and eventual consistency have the same performance",
      "Eventual consistency is only used in SQL databases"
    ],
    correctOption: 0,
    answer: "Strong consistency: after a write completes, every subsequent read (from any node) returns that write. Like a single-server database. Cost: higher latency (must coordinate replicas), lower availability (unavailable if majority of replicas are down). Examples: PostgreSQL (single node), Spanner, ZooKeeper. Eventual consistency: after a write, replicas may return stale data for a window (milliseconds to seconds), but will eventually converge. Cost: lower latency (no coordination needed), higher availability (any replica can serve reads). Examples: DynamoDB (default), Cassandra, DNS. Spectrum in between: (1) Read-your-writes — you always see your own writes (others may not yet). (2) Monotonic reads — you never see time go backwards (no reading newer then older data). (3) Bounded staleness — reads are at most N seconds behind writes. Choose based on requirements: banking → strong. Social media feed → eventual. Shopping cart → read-your-writes.",
    tips: "The key question: 'What happens if the user reads stale data?' If the answer is 'they see a slightly old like count' → eventual is fine. If 'they overdraw their bank account' → you need strong consistency."
  },
  {
    id: 406, topic: "System Design", difficulty: "medium",
    scenario: "What is the sidecar pattern and how is it used in service mesh architectures?",
    options: [
      "A sidecar is a backup service that takes over when the primary fails",
      "A sidecar is a co-located proxy process deployed alongside each service instance that handles cross-cutting concerns (networking, observability, security) transparently — forming the data plane of a service mesh when deployed fleet-wide",
      "A sidecar is a lightweight version of the main service for testing",
      "Sidecars are only used in Kubernetes, not in other environments"
    ],
    correctOption: 1,
    answer: "Sidecar pattern: deploy a helper process alongside your application in the same pod/VM. The sidecar intercepts all inbound and outbound network traffic. Responsibilities: (1) Service discovery — find other services without hardcoded URLs. (2) Load balancing — client-side LB across service instances. (3) mTLS — automatic encryption between services (zero-trust). (4) Retries/timeouts — automatic retry with backoff, circuit breaking. (5) Observability — emit metrics, logs, traces without application changes. (6) Traffic management — canary deployments, A/B testing, fault injection. Service mesh: deploy sidecars to every service = mesh of proxies. Data plane: sidecars (Envoy proxy). Control plane: configuration and policy management (Istio, Linkerd). Benefits: language-agnostic (Java, Go, Python services all get the same features), separation of concerns (developers focus on business logic). Cost: latency overhead (extra hop per request), resource consumption (one sidecar per pod), operational complexity.",
    tips: "Envoy is the de facto sidecar proxy. Istio and Linkerd are the two main service mesh options. Istio is feature-rich but complex; Linkerd is simpler and lighter. Consider if you actually need a service mesh — for <10 services, it's usually overkill."
  },
  {
    id: 407, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a real-time recommendation engine for an e-commerce platform?",
    options: [
      "Show the most popular products to everyone",
      "Combine offline ML models (collaborative filtering, deep learning) trained on historical data with real-time signals (current session behavior, trending items) — using a two-stage retrieval-ranking pipeline with feature stores for low-latency serving",
      "Use simple rules like 'customers who bought X also bought Y'",
      "Pre-compute all recommendations nightly and cache them"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Offline pipeline — train models on historical data: Collaborative filtering (users who bought X also bought Y), Content-based (similar product attributes), Deep learning (embeddings from user behavior sequences). Generate candidate pools and user embeddings. Store in feature store. (2) Online serving — two-stage pipeline: Retrieval (fast, get 1000 candidates from multiple sources: CF model, content similarity, trending, recently viewed) → Ranking (precise, ML model scores each candidate using user features + item features + context. Top 20 returned). (3) Real-time signals — current session: viewed items, cart contents, search queries. Update user embedding in real-time (Flink stream processing). Inject trending/viral items. (4) Feature store — pre-computed features for low-latency lookup: user purchase history, item popularity, cross-sell affinity scores. Dual storage: offline (training) + online (serving, <10ms reads). (5) A/B testing — serve different models/algorithms to user segments, measure CTR/conversion. (6) Cold start — new users: popular items + demographic-based. New items: content-based features until enough interaction data. Latency budget: <100ms for full recommendation.",
    tips: "The two-stage retrieve-then-rank architecture is universal across Netflix, Amazon, YouTube. The retrieval stage handles scale (millions of items → 1000 candidates), the ranking stage handles precision (1000 → 20 shown)."
  },
  {
    id: 408, topic: "System Design", difficulty: "easy",
    scenario: "What is the CAP theorem and what does it mean in practice?",
    options: [
      "CAP theorem states that a distributed system can only guarantee two of three properties: Consistency (all nodes see the same data), Availability (every request gets a response), and Partition Tolerance (system works despite network failures) — and you must always choose P",
      "CAP means you can have all three properties simultaneously",
      "CAP only applies to relational databases",
      "CAP theorem has been disproven by modern databases"
    ],
    correctOption: 0,
    answer: "CAP theorem (Eric Brewer, 2000): during a network partition, you must choose between Consistency and Availability. Partition Tolerance is not optional in distributed systems — networks WILL fail. So the real choice is: CP (Consistency + Partition Tolerance): during a partition, reject requests rather than return stale data. Examples: ZooKeeper, HBase, MongoDB (default config). Use for: financial data, inventory counts, anything where stale reads are dangerous. AP (Availability + Partition Tolerance): during a partition, serve requests even if data may be stale. Examples: Cassandra, DynamoDB, DNS. Use for: social media, caching, analytics — where availability matters more than perfect accuracy. Important nuance: CAP is about behavior DURING partitions only. When the network is healthy, you can have all three. Also, the choice is per-operation, not per-system — you can use CP for payments and AP for user profiles in the same system.",
    tips: "PACELC theorem extends CAP: during Partition, choose A or C; Else (normal operation), choose Latency or Consistency. This better describes real systems — DynamoDB is PA/EL (available during partition, low latency normally)."
  },
  {
    id: 409, topic: "System Design", difficulty: "medium",
    scenario: "How do you design database sharding and what are the key challenges?",
    options: [
      "Just split tables alphabetically across databases",
      "Choose a shard key that distributes data evenly, use consistent hashing or range-based partitioning, handle cross-shard queries with scatter-gather, and plan for resharding — while being aware of hot shards, cross-shard joins, and distributed transaction limitations",
      "Sharding is only needed for databases over 100TB",
      "Use a single shard per microservice and never join across services"
    ],
    correctOption: 1,
    answer: "Sharding: partition data across multiple database instances. Strategies: (1) Hash-based — hash(shard_key) mod N. Even distribution but resharding requires data migration. (2) Range-based — shard by ranges (users A-M → shard 1, N-Z → shard 2). Supports range queries but can cause hot shards. (3) Directory-based — lookup table maps key → shard. Flexible but adds a lookup hop. Shard key selection (critical): choose a key with high cardinality and even distribution. user_id is common. Avoid: date (hot shard for recent data), country (uneven distribution). Challenges: (1) Cross-shard queries — scatter-gather is expensive (query all shards, merge results). Design to minimize cross-shard operations. (2) Cross-shard joins — not directly supported. Denormalize or use application-level joins. (3) Resharding — adding/removing shards requires data migration. Consistent hashing minimizes data movement. (4) Distributed transactions — 2PC across shards is slow. Prefer saga pattern. (5) Auto-increment IDs — need globally unique IDs (Snowflake, UUID).",
    tips: "The most common mistake: choosing a bad shard key. If you shard by date, the current day's shard handles all traffic. If you shard by tenant in a multi-tenant system, one large tenant becomes a hot shard. Test your key distribution before committing."
  },
  {
    id: 410, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a large-scale search engine like Elasticsearch?",
    options: [
      "Use a relational database with LIKE queries",
      "Use inverted indexes distributed across shards: documents are analyzed into tokens, stored in inverted indexes mapping term→document IDs, queries are scattered across shards and gathered/ranked, with relevance scoring (TF-IDF/BM25) and optimizations like segment merging and caching",
      "Store all documents in memory for fast lookup",
      "Use simple keyword matching without ranking"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Indexing pipeline — document arrives → analyzer breaks text into tokens (tokenization, lowercasing, stemming, stop word removal) → inverted index maps each token to list of (docID, position, frequency). (2) Inverted index structure — term dictionary (sorted terms for fast lookup) + posting lists (compressed list of doc IDs containing term). Stored in immutable segments (LSM-tree inspired). (3) Distribution — index is split into shards (hash of doc ID), each shard has replicas. Write: hash → primary shard → replicate to replicas. Search: scatter to one replica of each shard → gather results → merge and re-rank. (4) Relevance scoring — BM25: considers term frequency (how often term appears in document), inverse document frequency (rare terms score higher), document length normalization. (5) Segment merging — immutable segments accumulate, periodic merge compacts them (reduces segments, removes deleted docs). (6) Query types — term query (exact match), match query (analyzed text), bool query (must/should/must_not), range query, aggregations. (7) Caching — query cache (same query → same results), field data cache (for sorting/aggregations). Scale: Elasticsearch clusters handle petabytes across hundreds of nodes.",
    tips: "Elasticsearch is built on Apache Lucene. The key insight: inverted index is to search what B-tree is to databases — the fundamental data structure. Understanding TF-IDF/BM25 scoring is critical for search system design interviews."
  },
  {
    id: 411, topic: "System Design", difficulty: "easy",
    scenario: "What are WebSockets and when should you use them instead of HTTP?",
    options: [
      "WebSockets provide full-duplex, persistent connections between client and server — ideal for real-time applications like chat, gaming, and live dashboards where the server needs to push data without the client requesting it",
      "WebSockets are just faster HTTP requests",
      "WebSockets should replace HTTP for all API calls",
      "WebSockets only work in web browsers, not mobile apps"
    ],
    correctOption: 0,
    answer: "HTTP: request-response model. Client asks, server responds, connection closes (or is reused). Server cannot send data without a client request. WebSocket: starts as HTTP upgrade request, then becomes a persistent bidirectional TCP connection. Either side can send messages at any time. Use WebSockets for: (1) Chat/messaging — server pushes new messages instantly. (2) Live feeds — stock tickers, sports scores, social media feeds. (3) Gaming — real-time game state synchronization. (4) Collaborative editing — broadcast changes to all participants. (5) Live notifications — instant push without polling. Stick with HTTP for: standard CRUD APIs, file uploads/downloads, infrequent data requests, cacheable responses. Alternatives: Server-Sent Events (SSE) — server-to-client only, simpler than WebSocket, built-in reconnection. Long polling — HTTP-based, compatible everywhere but higher overhead. WebSocket concerns: no automatic reconnection, harder to load balance (sticky sessions), stateful connections complicate scaling.",
    tips: "SSE is often a better choice than WebSockets when you only need server→client updates (dashboards, notifications). It's simpler, works with HTTP/2, and automatically reconnects."
  },
  {
    id: 412, topic: "System Design", difficulty: "medium",
    scenario: "How do you implement a distributed lock correctly?",
    options: [
      "Use a simple Redis SETNX command and it's done",
      "Use Redis Redlock or ZooKeeper/etcd: SET with NX+EX for single-node, Redlock for multi-node — always with TTL, fencing tokens to prevent stale lock holders from making changes, and proper error handling for lock acquisition failures",
      "Use database row-level locks for distributed locking",
      "Distributed locks are unnecessary — just use optimistic concurrency"
    ],
    correctOption: 1,
    answer: "Single Redis node: SET resource_name token NX EX 30 (set if not exists, 30s TTL). Release: Lua script that checks token matches before deleting (prevent releasing someone else's lock). Problem: if Redis master fails before replicating, two clients can hold the same lock. Redlock (multi-node): acquire lock on N/2+1 independent Redis nodes. If majority acquired within timeout, lock is held. More resilient but controversial (Martin Kleppmann's critique). ZooKeeper/etcd: create ephemeral sequential node under /locks/resource. Lowest sequence number holds lock. ZooKeeper handles failover automatically (consensus-based). Critical: fencing tokens — lock service issues monotonically increasing token with each lock grant. Protected resource rejects operations with tokens lower than the highest seen. This prevents a client that was paused (GC, network) from making changes after its lock expired and was acquired by another client. Best practices: always set TTL (prevent deadlocks), use fencing tokens, handle lock acquisition failure gracefully, keep lock duration short.",
    tips: "Martin Kleppmann's 'How to do distributed locking' blog post is essential reading. His key insight: distributed locks without fencing tokens are unsafe because of process pauses. Fencing tokens make the system safe even if the lock implementation has bugs."
  },
  {
    id: 413, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a multi-tenant SaaS platform with tenant isolation?",
    options: [
      "Give each tenant their own separate server and database",
      "Use a spectrum of isolation models: shared database with tenant_id column (pool model), schema-per-tenant (bridge model), or database-per-tenant (silo model) — with noisy neighbor prevention, tenant-aware routing, and hierarchical resource quotas",
      "Put all tenants in one database with no isolation",
      "Multi-tenancy is just adding a tenant_id filter to every query"
    ],
    correctOption: 1,
    answer: "Isolation models: (1) Pool (shared everything) — single database, tenant_id column on every table. Row-level security (Postgres RLS) enforces isolation. Pro: cheapest, simplest operations. Con: noisy neighbors, one bad query affects all. (2) Bridge (schema-per-tenant) — same database server, separate schema per tenant. Pro: better isolation, easy per-tenant backup/restore. Con: schema migration across thousands of schemas. (3) Silo (database-per-tenant) — dedicated database per tenant. Pro: strongest isolation, independent scaling, regulatory compliance. Con: most expensive, operational overhead. Hybrid approach: pool model for small tenants, silo for enterprise/regulated tenants. Cross-cutting concerns: (1) Routing — tenant context from subdomain/JWT/header → route to correct database. (2) Noisy neighbor prevention — per-tenant rate limiting, resource quotas (CPU, connections, storage), query timeouts. (3) Data migration — onboard: provision resources; offboard: export + delete data (GDPR). (4) Billing — meter per-tenant usage (API calls, storage, compute). (5) Customization — feature flags, configuration per tenant. (6) Security — tenant context must be unforgeable, never leak data across tenants.",
    tips: "Most SaaS startups begin with pool model and graduate enterprise customers to silo model. AWS has excellent multi-tenancy whitepapers. The biggest risk: cross-tenant data leakage — always test that a bug in tenant routing doesn't expose another tenant's data."
  },
  {
    id: 414, topic: "System Design", difficulty: "medium",
    scenario: "What is event sourcing and when is it a good fit?",
    options: [
      "Event sourcing means logging every error event in your application",
      "Event sourcing stores state as a sequence of immutable events rather than current state — good for audit trails, temporal queries, and event-driven architectures, but adds complexity in querying current state, event schema evolution, and storage growth",
      "Event sourcing replaces the need for a database",
      "Event sourcing is the same as event-driven architecture"
    ],
    correctOption: 1,
    answer: "Traditional: store current state (account balance = $500). Event sourcing: store all events that led to current state (deposited $1000, withdrew $300, deposited $200, withdrew $400 → balance = $500). Current state is derived by replaying events. Benefits: (1) Complete audit trail — every change is recorded with who/what/when. (2) Temporal queries — 'what was the state at 3pm yesterday?' (replay events up to that point). (3) Event replay — fix bugs by replaying events through corrected logic. (4) Natural fit for event-driven systems — events are the source of truth, projections are read models. Challenges: (1) Querying — can't SELECT * WHERE balance > 500 directly. Need CQRS: maintain read projections (materialized views) updated by events. (2) Event schema evolution — events are immutable, schemas change. Need upcasting or versioned events. (3) Storage — events accumulate forever. Snapshots reduce replay time (snapshot every N events). (4) Eventual consistency — projections lag behind events. Good fit: financial systems, audit-heavy domains, collaborative editing. Bad fit: simple CRUD, high-frequency updates to same entity.",
    tips: "Event sourcing + CQRS is a powerful combination but adds significant complexity. Don't use it for simple CRUD. It shines in domains where 'why did this happen?' is a common question — banking, healthcare, legal."
  },
  {
    id: 415, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a globally distributed, highly available key-value store like DynamoDB?",
    options: [
      "Use a single master with replicas in each region",
      "Use consistent hashing for partitioning, quorum-based replication (W+R>N) for tunable consistency, vector clocks or last-writer-wins for conflict resolution, Merkle trees for anti-entropy repair, and gossip protocol for cluster membership — enabling single-digit millisecond reads/writes at any scale",
      "Just use Redis with replication across regions",
      "Shard by geographic region with no cross-region replication"
    ],
    correctOption: 1,
    answer: "Based on Amazon's Dynamo paper: (1) Partitioning — consistent hashing with virtual nodes. Each physical node owns multiple ranges on the hash ring. Data automatically redistributed when nodes join/leave. (2) Replication — each key replicated to N nodes (typically 3). Coordinator writes to N replicas. Tunable consistency: W=write quorum, R=read quorum. W+R>N ensures overlap (strong consistency if W=2, R=2, N=3). W=1, R=1 for maximum performance (eventual consistency). (3) Conflict resolution — concurrent writes to different replicas can conflict. Vector clocks: detect conflicts, application resolves (shopping cart merge). LWW (last-writer-wins): simpler, some writes may be lost. (4) Failure handling — sloppy quorum + hinted handoff: if a replica is down, write to next available node with a 'hint'. When the node recovers, hinted data is forwarded. (5) Anti-entropy — Merkle trees: hash tree of key ranges. Compare trees between replicas to find inconsistencies efficiently (O(log N) comparison). (6) Membership — gossip protocol: nodes periodically exchange membership lists. Eventually consistent view of cluster topology. Consistent hashing + gossip = no single point of failure, fully decentralized.",
    tips: "The Dynamo paper (2007) is one of the most important distributed systems papers. DynamoDB, Cassandra, Riak, and Voldemort are all inspired by it. Understanding virtual nodes, vector clocks, and Merkle trees from this paper will help in many system design interviews."
  },
  {
    id: 416, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a social media news feed system like Facebook or Twitter?",
    options: [
      "Query all friends' posts in real-time when user opens the feed",
      "Use a hybrid approach: fan-out-on-write for normal users (pre-compute feeds into per-user caches) and fan-out-on-read for celebrity users (fetch at read time) — with ranking service, feed cache, and real-time updates via WebSocket",
      "Store all posts in a single table sorted by timestamp",
      "Send push notifications for every new post instead of a feed"
    ],
    correctOption: 1,
    answer: "Fan-out-on-write: when user X posts, push that post to every follower's feed cache (Redis list). Pros: fast reads (O(1) — just read from cache). Cons: expensive writes for celebrities (millions of followers = millions of cache writes). Fan-out-on-read: when user opens feed, fetch posts from all followed users in real-time. Pros: cheap writes. Cons: slow reads (merge N timelines). Hybrid: fan-out-on-write for users with <10K followers, fan-out-on-read for celebrities. Ranking: ML model scores posts by relevance (engagement prediction, recency, relationship strength). Feed cache: per-user Redis sorted set with top 500 posts. Real-time: WebSocket pushes new posts to online users. Pagination: cursor-based (not offset) for stable scrolling.",
    tips: "This is one of the most common system design questions. Always mention the fan-out trade-off and the celebrity problem. Twitter switched from fan-out-on-write to a hybrid approach specifically because of celebrities."
  },
  {
    id: 417, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between B-tree and LSM-tree storage engines?",
    options: [
      "B-trees are for SQL databases only; LSM-trees are for NoSQL only",
      "B-trees use in-place updates with page-based storage (optimized for reads), while LSM-trees use append-only writes with periodic compaction (optimized for writes) — each excelling at different workload patterns",
      "LSM-trees are always faster than B-trees",
      "B-trees don't support range queries"
    ],
    correctOption: 1,
    answer: "B-tree: data stored in fixed-size pages (4-16KB), organized as a balanced tree. Updates modify pages in-place. Read: traverse tree from root to leaf, O(log N). Write: find page, update in-place (may trigger page split). Pros: predictable read performance, efficient range scans. Cons: write amplification from page rewrites, fragmentation. LSM-tree: writes go to in-memory memtable (sorted), flushed to disk as immutable SSTable when full. Reads check memtable first, then SSTables (use bloom filters to skip). Compaction merges SSTables periodically. Pros: sequential writes (much faster than random I/O), better write throughput. Cons: compaction overhead, space amplification, less predictable read latency. B-tree: PostgreSQL, MySQL InnoDB. LSM-tree: RocksDB, LevelDB, Cassandra, HBase.",
    tips: "B-tree = read-optimized (OLTP with balanced reads/writes). LSM-tree = write-optimized (heavy write workloads, time-series, logs). Know when to pick each."
  },
  {
    id: 418, topic: "System Design", difficulty: "easy",
    scenario: "What is an SSTable and how does it relate to LSM-tree storage?",
    options: [
      "SSTable is a SQL table stored on an SSD",
      "An SSTable (Sorted String Table) is an immutable on-disk file of key-value pairs sorted by key — it's the persistent storage format used by LSM-trees when memtable data is flushed to disk",
      "SSTable is a caching format for Redis",
      "SSTable stands for Secure Socket Table for encrypted storage"
    ],
    correctOption: 1,
    answer: "SSTable (Sorted String Table): immutable file containing key-value pairs sorted by key. Structure: data blocks (sorted key-value pairs), index block (sparse index of keys to block offsets), bloom filter (quickly test if a key might exist), metadata. In LSM-tree flow: (1) writes go to memtable (in-memory sorted structure, usually red-black tree or skip list), (2) when memtable is full, flush to disk as SSTable, (3) multiple SSTables accumulate, (4) compaction merges overlapping SSTables into fewer, larger ones. Benefits of sorting: enables efficient range queries, binary search for point lookups, and merge-sort during compaction. Immutability simplifies concurrency (no locks needed for reads).",
    tips: "SSTables are used by Google Bigtable, Apache Cassandra, RocksDB, and LevelDB. The key insight: sorted + immutable = efficient merging (like merge sort)."
  },
  {
    id: 419, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a food delivery system like Uber Eats or DoorDash?",
    options: [
      "Simple CRUD app with a list of restaurants and orders",
      "Microservices architecture with: restaurant service (menus, availability), order service (placement, state machine), dispatch service (driver matching using geospatial index), real-time tracking (WebSocket + driver GPS), payment service (pre-auth + capture), and ETA prediction (ML model using traffic, distance, restaurant prep time)",
      "Single monolithic app with a relational database",
      "Peer-to-peer system where customers contact restaurants directly"
    ],
    correctOption: 1,
    answer: "Key services: (1) Restaurant Service — menus, pricing, hours, availability radius. Geospatial index (PostGIS/Redis GEO) for nearby restaurants. (2) Order Service — state machine: placed → accepted → preparing → ready → picked_up → delivered. Saga pattern for coordination. (3) Dispatch Service — match driver to order using: proximity (geohash), driver rating, current load, route efficiency. Batching: assign multiple orders to one driver if restaurants/destinations are close. (4) Tracking — driver app sends GPS every 5-10s via WebSocket. Store in Redis for real-time queries. Broadcast to customer via WebSocket. (5) ETA — ML model: historical prep times per restaurant, traffic patterns, distance, weather. Update dynamically during delivery. (6) Payment — pre-authorize at order time, capture after delivery. Handle tips, split payments, refunds. (7) Rating — bidirectional (customer rates driver + restaurant, driver rates customer). Scale challenges: peak hours (dinner rush), geographic partitioning, surge pricing.",
    tips: "Focus on the dispatch algorithm and real-time tracking — these are the hardest parts. Mention the batching optimization (one driver, multiple orders) as it's a key differentiator for profitability."
  },
  {
    id: 420, topic: "System Design", difficulty: "easy",
    scenario: "What is a memtable in the context of database storage engines?",
    options: [
      "A memtable is an in-memory sorted data structure (typically a red-black tree or skip list) that serves as a write buffer in LSM-tree storage engines — writes go here first before being flushed to disk as SSTables",
      "A memtable is a database table that only exists in memory",
      "A memtable is the page cache used by B-tree databases",
      "A memtable is a distributed hash table for caching"
    ],
    correctOption: 0,
    answer: "In LSM-tree engines, every write first goes to the memtable (in-memory). The memtable keeps entries sorted by key, enabling efficient lookups and range scans. When the memtable reaches a size threshold (typically 64MB-256MB), it becomes immutable and a new memtable is created for new writes. The immutable memtable is then flushed to disk as an SSTable in the background. During reads, the memtable is checked first (most recent data), then SSTables on disk. A Write-Ahead Log (WAL) ensures durability — writes are logged to WAL before memtable, so data can be recovered if the process crashes before flushing. Common implementations: skip list (RocksDB, LevelDB) or red-black tree.",
    tips: "The memtable is why LSM-trees have fast writes — everything is an append to an in-memory sorted structure. The WAL ensures you don't lose data between flushes."
  },
  {
    id: 421, topic: "System Design", difficulty: "medium",
    scenario: "What are compaction strategies in LSM-tree storage engines and how do they differ?",
    options: [
      "Compaction is just deleting old data",
      "There is only one compaction strategy — merge everything into one file",
      "Size-tiered compaction groups similarly-sized SSTables and merges them, while leveled compaction organizes SSTables into levels with size ratios — size-tiered favors write throughput, leveled favors read performance and space efficiency",
      "Compaction only happens during database shutdown"
    ],
    correctOption: 2,
    answer: "Size-Tiered Compaction (STCS): group SSTables of similar size, merge when count exceeds threshold (e.g., 4 similar-sized SSTables → merge into 1 larger). Pros: high write throughput, simple. Cons: high space amplification (temporary 2x storage during compaction), more SSTables to check during reads. Leveled Compaction (LCS): SSTables organized into levels (L0, L1, L2...). Each level is 10x larger than previous. L0 SSTables overlap; L1+ SSTables have non-overlapping key ranges. Compaction: pick an SSTable from Ln, merge with overlapping SSTables in Ln+1. Pros: bounded space amplification (10% overhead), fewer SSTables per read, predictable read latency. Cons: higher write amplification (each key may be rewritten through multiple levels). FIFO Compaction: simply delete oldest SSTables when total size exceeds threshold. Used for time-series data where old data expires.",
    tips: "Cassandra defaults to STCS, RocksDB to LCS. Choose STCS for write-heavy workloads, LCS for read-heavy with space constraints. Know the amplification trade-offs: write vs read vs space."
  },
  {
    id: 422, topic: "System Design", difficulty: "hard",
    scenario: "How would you design an elevator system for a large building?",
    options: [
      "First-come-first-served — elevators respond to the oldest request first",
      "Use a scheduling algorithm that considers: current direction (continue in same direction to serve all requests), destination dispatch (group passengers going to same floor), zone allocation (assign elevator groups to floor ranges), and load balancing — minimizing average wait time and travel time",
      "Random assignment — any elevator handles any request",
      "One elevator per floor so no scheduling is needed"
    ],
    correctOption: 1,
    answer: "Classic algorithms: (1) SCAN (elevator algorithm): move in one direction, serve all requests in that direction, then reverse. Like a disk head. Simple, fair, but not optimal. (2) LOOK: like SCAN but reverses when no more requests in current direction (doesn't go to top/bottom needlessly). (3) Destination dispatch: passengers enter destination floor at lobby (not just up/down). System groups passengers going to same/nearby floors into same elevator. Reduces stops per trip by 30-50%. Used in modern high-rises. Design considerations: (1) Zone allocation: in a 50-floor building, elevators 1-4 serve floors 1-25, elevators 5-8 serve 25-50. Reduces unnecessary stops. (2) Express mode: dedicated elevators for lobby-to-sky-lobby express (skip intermediate floors). (3) Rush hour handling: morning = most requests going up from lobby. Bias idle elevators to lobby. Evening = reverse. (4) Load balancing: distribute requests across elevators to minimize max wait time. (5) Emergency: fire mode, earthquake mode, power failure fallback.",
    tips: "This is an OOP design question that can also be asked as system design. Focus on the scheduling algorithm and the state machine for each elevator (idle, moving up, moving down, door open)."
  },
  {
    id: 423, topic: "System Design", difficulty: "easy",
    scenario: "What is a bloom filter and how is it used in databases?",
    options: [
      "A bloom filter is a type of B-tree index",
      "A bloom filter is a SQL query optimizer",
      "A bloom filter is a probabilistic data structure that can tell you 'definitely not in set' or 'possibly in set' — used in databases to avoid unnecessary disk reads by quickly checking if a key might exist in an SSTable",
      "A bloom filter is a data compression algorithm"
    ],
    correctOption: 2,
    answer: "A bloom filter is a bit array with multiple hash functions. To add a key: hash it with K hash functions, set those K bit positions to 1. To check a key: hash it with same K functions, check if ALL bit positions are 1. If any bit is 0 → key definitely NOT in set (no false negatives). If all bits are 1 → key MIGHT be in set (possible false positive). False positive rate depends on: bit array size, number of hash functions, number of elements. Typical: 1% FP rate with 10 bits per element. In databases: LSM-tree reads must check multiple SSTables. Before reading an SSTable from disk, check its bloom filter. If bloom filter says 'no', skip that SSTable entirely (save a disk read). This dramatically improves point lookup performance. Used by: Cassandra, RocksDB, HBase, LevelDB.",
    tips: "Bloom filters are space-efficient (10 bits per element vs storing the actual key). The key property: no false negatives, possible false positives. This makes them perfect for 'should I bother looking here?' checks."
  },
  {
    id: 424, topic: "System Design", difficulty: "medium",
    scenario: "What is the Raft consensus algorithm and how does it achieve distributed consensus?",
    options: [
      "Raft uses a lottery system where any node can randomly become leader",
      "Raft divides consensus into leader election, log replication, and safety — a leader is elected by majority vote, the leader replicates log entries to followers, and committed entries are guaranteed to be present on all future leaders",
      "Raft requires all nodes to agree before committing any write",
      "Raft is the same as two-phase commit"
    ],
    correctOption: 1,
    answer: "Raft has three roles: leader, follower, candidate. (1) Leader election: followers have election timeout (150-300ms random). If no heartbeat from leader, follower becomes candidate, increments term, votes for self, requests votes from others. Majority vote wins. Random timeouts prevent split votes. (2) Log replication: leader receives client writes, appends to its log, sends AppendEntries RPCs to followers. When majority acknowledge, entry is committed. Leader notifies followers of committed entries. (3) Safety: only candidates with all committed entries can win election (voters reject candidates with shorter/older logs). This guarantees committed entries survive leader changes. Key properties: at most one leader per term, leader's log is always correct (leader never overwrites its own entries), committed entries are durable. Used by: etcd, CockroachDB, TiKV, Consul.",
    tips: "Raft was designed to be understandable (unlike Paxos). The key insight: randomized election timeouts prevent most split votes. In interviews, walk through a leader failure scenario step by step."
  },
  {
    id: 425, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a ride-sharing dispatch system like Uber or Lyft?",
    options: [
      "Assign the closest driver to each rider request",
      "Use a geospatial matching system with: real-time driver location indexing (geohash/S2 cells), supply-demand pricing (surge), batched matching algorithm (Hungarian method for optimal global assignment), ETA prediction, and driver-rider scoring for match quality",
      "Let drivers accept ride requests manually from a list",
      "Pre-assign fixed routes like a bus system"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Location service: drivers send GPS every 4s. Store in geospatial index (S2 cells or geohash in Redis). Query: find all drivers within radius of rider. (2) Matching: naive = closest driver. Better = batched matching: collect requests and available drivers in a time window (2-5s), solve assignment problem to minimize total wait time (Hungarian algorithm). Consider: driver rating, car type, ETA, acceptance probability. (3) ETA prediction: ML model using road network graph (Dijkstra/A*), real-time traffic, historical patterns, weather. Update every few seconds during ride. (4) Surge pricing: divide city into hexagonal cells. If demand/supply ratio > threshold, increase price (multiplier). Price elasticity model to find optimal multiplier. (5) Dispatch state machine: request → matching → driver_accepted → arriving → trip_started → trip_completed. Handle timeouts at each stage. (6) Scale: partition by city/region, millions of location updates per second, global optimization is NP-hard so use heuristics.",
    tips: "Uber uses H3 (hexagonal hierarchical geospatial indexing) for spatial partitioning. The key architectural insight: batch matching over a time window gives globally better assignments than greedy closest-driver matching."
  },
  {
    id: 426, topic: "System Design", difficulty: "easy",
    scenario: "What is a skip list and where is it used?",
    options: [
      "A skip list is a linked list that skips every other element",
      "A skip list is a probabilistic data structure with multiple layers of linked lists that provides O(log n) search, insert, and delete — used as the memtable implementation in databases like Redis and LevelDB",
      "A skip list is an algorithm for skipping cache levels",
      "A skip list is a data structure only used for sorting"
    ],
    correctOption: 1,
    answer: "A skip list is a layered linked list where higher layers skip over elements for faster traversal. Bottom layer (L0): regular sorted linked list with all elements. Layer L1: subset of elements (each element promoted with 50% probability). Layer L2: subset of L1 elements. And so on. Search: start from top layer, move right until next element is too large, drop down one layer, repeat. Average O(log n) operations. Insert: insert at bottom, flip coin to decide whether to promote to each higher layer. Benefits over balanced BSTs: simpler to implement, no rebalancing needed, lock-free concurrent implementations are easier. Used in: Redis sorted sets (zset), LevelDB/RocksDB memtable, Apache Lucene. Compared to red-black trees: similar performance, but skip lists are easier to implement concurrently.",
    tips: "Redis uses skip lists for sorted sets because they're simpler than balanced BSTs and support efficient range queries. In interviews, drawing the multi-layer structure makes it easy to explain."
  },
  {
    id: 427, topic: "System Design", difficulty: "medium",
    scenario: "What is MVCC (Multi-Version Concurrency Control) and how does it work in databases?",
    options: [
      "MVCC locks all rows during a transaction to prevent concurrent access",
      "MVCC stands for Multiple Virtual CPU Cores, a database scaling technique",
      "MVCC keeps multiple versions of each row, allowing readers to see a consistent snapshot without blocking writers — each transaction sees the database as it was at the transaction's start time",
      "MVCC is only used in NoSQL databases"
    ],
    correctOption: 2,
    answer: "MVCC: instead of overwriting data, create a new version. Each row has: creation timestamp (or transaction ID) and deletion timestamp. Read: transaction sees only versions visible at its snapshot time (created before snapshot, not yet deleted at snapshot). Write: create new version with current transaction ID, mark old version as deleted. Benefits: readers never block writers, writers never block readers. Only writer-writer conflicts need resolution. Implementation in PostgreSQL: each row has xmin (creating transaction) and xmax (deleting transaction). VACUUM cleans up old versions no longer visible to any transaction. In MySQL InnoDB: undo log stores old versions. Read view determines which versions are visible. Isolation levels: Read Committed (new snapshot per statement), Repeatable Read (snapshot at transaction start), Serializable (adds predicate locks). MVCC is used by: PostgreSQL, MySQL InnoDB, Oracle, CockroachDB.",
    tips: "MVCC is how PostgreSQL and MySQL achieve high concurrency without read locks. The trade-off: storage overhead from old versions (PostgreSQL needs VACUUM, MySQL needs undo log purge)."
  },
  {
    id: 428, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a music streaming service like Spotify?",
    options: [
      "Store all songs as files and stream them over HTTP",
      "Use adaptive bitrate streaming with: CDN-distributed audio files in multiple quality levels, client-side buffer management, offline caching, a recommendation engine using collaborative filtering, and a microservices architecture for playlists, search, social features, and royalty tracking",
      "Download entire songs before playback",
      "Use peer-to-peer streaming between users"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Audio storage: songs encoded at multiple bitrates (96/160/320 kbps). Stored in object storage (S3), distributed via CDN for low-latency streaming. (2) Streaming: adaptive bitrate — client starts at low quality, upgrades based on bandwidth. Pre-buffer next song for gapless playback. Byte-range requests for seeking. (3) Offline: encrypted downloads with DRM. License check on app start. (4) Recommendations: collaborative filtering (users who liked X also liked Y), content-based (audio features: tempo, energy, danceability), contextual (time of day, activity, mood). Discovery Weekly: ML model generating personalized playlists. (5) Search: Elasticsearch for songs/artists/albums/playlists. Autocomplete with prefix matching. (6) Social: following artists, shared playlists, listening activity feed. (7) Royalty tracking: every play event → Kafka → royalty calculation pipeline. Pro-rata model (pool divided by total streams) or user-centric model (your subscription goes to artists you listened to). (8) Scale: 100M+ songs, 500M+ users, peak concurrent streams in millions.",
    tips: "Spotify actually used P2P streaming in its early days (desktop app) but moved to CDN-based. Focus on the recommendation engine — it's their core differentiator and a great talking point."
  },
  {
    id: 429, topic: "System Design", difficulty: "easy",
    scenario: "What is write amplification in storage engines?",
    options: [
      "Write amplification means the database rejects some writes",
      "Write amplification means data is written to disk multiple times due to the storage engine's internal operations — a single logical write may cause 10-30x more physical I/O, especially in LSM-trees due to compaction",
      "Write amplification is a technique to speed up writes",
      "Write amplification only affects SSDs, not HDDs"
    ],
    correctOption: 1,
    answer: "Write amplification (WA) is the ratio of physical bytes written to disk vs. logical bytes written by the application. Example: you write 1KB. With WA of 10, the storage engine writes 10KB to disk. In LSM-trees: a key-value pair is written to WAL (1st write), memtable flush writes to L0 SSTable (2nd write), compaction from L0→L1 (3rd write), L1→L2 (4th write), etc. Each level multiplies writes. Leveled compaction typically has WA of 10-30x. In B-trees: writing a single row may require rewriting an entire 4KB-16KB page (even if the row is 100 bytes), plus WAL. Page splits cause additional writes. Why it matters: (1) SSD wear — SSDs have limited write cycles (write endurance). High WA reduces SSD lifespan. (2) Throughput — disk I/O bandwidth is finite. Higher WA means lower effective write throughput.",
    tips: "Write amplification is the main downside of LSM-trees. Size-tiered compaction has lower WA than leveled compaction but higher space amplification. It's a three-way trade-off: write amplification, read amplification, space amplification."
  },
  {
    id: 430, topic: "System Design", difficulty: "medium",
    scenario: "How does the Paxos consensus algorithm work at a high level?",
    options: [
      "Paxos uses a leader that dictates all decisions",
      "Paxos has three roles (proposer, acceptor, learner) and two phases: prepare/promise phase to claim a proposal number, then accept/accepted phase to commit a value — ensuring only one value can be chosen even with concurrent proposals and failures",
      "Paxos requires unanimous agreement from all nodes",
      "Paxos is a simpler alternative to Raft"
    ],
    correctOption: 1,
    answer: "Paxos (Leslie Lamport, 1989): Three roles: proposer (proposes values), acceptor (votes on proposals), learner (learns chosen value). Phase 1 (Prepare): proposer picks a unique proposal number N, sends Prepare(N) to majority of acceptors. Acceptor: if N is highest seen, promise to reject proposals < N, return any previously accepted value. Phase 2 (Accept): if proposer gets promises from majority, it sends Accept(N, value). Value is either: a previously accepted value (from Phase 1 responses) or proposer's own value. Acceptor: if N is still highest seen, accept it. Once majority accept, value is chosen. Key properties: safety (only one value chosen), liveness (progress guaranteed if fewer than half of nodes fail). Challenges: complex to implement correctly, livelock possible (two proposers keep preempting each other — solved by Multi-Paxos with stable leader). Multi-Paxos: elect a stable leader, skip Phase 1 for subsequent proposals. This is what production systems use.",
    tips: "Raft was specifically designed because Paxos is hard to understand and implement. In interviews, it's fine to explain Raft instead of Paxos — but know that Paxos came first and is the theoretical foundation."
  },
  {
    id: 431, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a video conferencing system like Zoom?",
    options: [
      "Direct peer-to-peer connections between all participants",
      "Use a Selective Forwarding Unit (SFU) architecture: each participant sends their stream once to the SFU server, which selectively forwards streams to other participants based on their bandwidth and UI layout — combined with WebRTC for media transport, simulcast for adaptive quality, and SRTP for encryption",
      "All video goes through a central server that mixes it into a single stream",
      "Record all video and play it back with a 30-second delay"
    ],
    correctOption: 1,
    answer: "Three architectures: (1) P2P mesh: each participant sends to every other. Works for 2-3 people, but N participants = N*(N-1) streams. Unscalable. (2) MCU (Multipoint Control Unit): server receives all streams, decodes, composites into one video, re-encodes, sends single stream per participant. Pros: low client bandwidth. Cons: extremely CPU-intensive server-side, adds latency, inflexible layout. (3) SFU (Selective Forwarding Unit): server receives one stream per participant, forwards selected streams to others without transcoding. Simulcast: each sender uploads 3 quality levels (high/medium/low). SFU selects quality per receiver based on bandwidth and UI (active speaker gets high, thumbnail gets low). Encryption: SRTP (Secure Real-time Transport Protocol), DTLS key exchange. Signaling: WebSocket for session management (join/leave, mute, screen share). Media: WebRTC (STUN/TURN for NAT traversal, ICE for connection establishment). Scale: sharded by room, regional SFU servers with cascading for global calls.",
    tips: "SFU is the industry standard for video conferencing (Zoom, Google Meet, Microsoft Teams). The key advantage over MCU: no transcoding means lower latency and less server CPU. Mention simulcast as the adaptive quality mechanism."
  },
  {
    id: 432, topic: "System Design", difficulty: "easy",
    scenario: "What is the difference between HTTP/2 and HTTP/3?",
    options: [
      "HTTP/3 is just HTTP/2 with a different version number",
      "HTTP/2 uses TCP with multiplexed streams (still suffers from TCP head-of-line blocking), while HTTP/3 uses QUIC over UDP — eliminating head-of-line blocking, reducing connection setup time, and improving performance on lossy networks",
      "HTTP/3 is slower than HTTP/2 because UDP is unreliable",
      "HTTP/2 and HTTP/3 both use TCP"
    ],
    correctOption: 1,
    answer: "HTTP/2: runs over TCP. Multiplexes multiple streams over one TCP connection (avoids HTTP/1.1's head-of-line blocking at HTTP level). BUT: TCP treats all bytes as one ordered stream. If one TCP packet is lost, ALL streams are blocked until retransmission (TCP head-of-line blocking). Also: TCP+TLS handshake = 2-3 RTTs before data transfer. HTTP/3: runs over QUIC (built on UDP). QUIC provides: (1) Independent streams — packet loss on stream A doesn't block stream B (true multiplexing). (2) 0-RTT connection establishment for repeat connections (1-RTT for new). (3) Built-in TLS 1.3. (4) Connection migration — switching WiFi to cellular doesn't require new connection (connection identified by ID, not IP:port). (5) Improved congestion control. Adoption: Google (YouTube, Search), Cloudflare, Facebook all support HTTP/3.",
    tips: "The key selling point of HTTP/3: eliminating head-of-line blocking that TCP causes in HTTP/2. Also mention 0-RTT connection resumption — critical for mobile users who switch networks frequently."
  },
  {
    id: 433, topic: "System Design", difficulty: "medium",
    scenario: "What is the difference between a data warehouse and a data lake?",
    options: [
      "A data warehouse stores structured, processed data in a schema-on-write approach optimized for analytical queries, while a data lake stores raw data in any format using schema-on-read — data warehouses are for known queries, data lakes are for exploration and flexibility",
      "Data lakes are always in the cloud; data warehouses are always on-premises",
      "A data lake is just a data warehouse with more storage",
      "Data warehouses store unstructured data; data lakes store structured data"
    ],
    correctOption: 0,
    answer: "Data warehouse: structured data, transformed before loading (ETL), schema defined upfront (star/snowflake schema), optimized for SQL analytics. Users: business analysts, BI dashboards. Examples: Snowflake, Redshift, BigQuery. Pros: fast queries, data quality enforced, governance. Cons: expensive, rigid schema, slow to ingest new data types. Data lake: raw data in any format (structured, semi-structured, unstructured), loaded as-is (ELT), schema applied at read time. Stored in object storage (S3, ADLS). Users: data scientists, ML engineers. Examples: S3 + Athena, Databricks Delta Lake. Pros: flexible, cheap storage, handles any data type. Cons: can become 'data swamp' without governance, slower queries on raw data. Modern trend: Lakehouse architecture (Delta Lake, Apache Iceberg) — combines data lake flexibility with data warehouse performance (ACID transactions on data lake, query optimization, schema enforcement optional).",
    tips: "The lakehouse architecture is the modern answer — mention Delta Lake or Apache Iceberg. The key trade-off: schema-on-write (warehouse) guarantees quality but is rigid; schema-on-read (lake) is flexible but can be messy."
  },
  {
    id: 434, topic: "System Design", difficulty: "hard",
    scenario: "How would you design an online auction system like eBay?",
    options: [
      "Simple database table with bid amounts and timestamps",
      "Event-driven architecture with: real-time bid processing (optimistic locking to handle concurrent bids), auction timer service, proxy bidding (automatic incremental bidding up to max), bid sniping prevention, notification service for outbid alerts, and escrow/payment integration",
      "Process bids in hourly batches",
      "Let sellers manually accept bids they like"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Auction service: create/manage listings with start price, reserve price, end time, bid increment. State machine: draft → active → ending_soon → ended → sold/unsold. (2) Bid service: validate bid (> current + increment, user has payment method, not own auction). Optimistic locking: read current_price + version, submit bid with version check, retry on conflict. Under high concurrency, use Redis atomic operations for hot auctions. (3) Proxy bidding: user sets max bid. System automatically bids minimum increment above competitors until max reached. Implemented as: store max bid privately, reveal only what's needed to stay winning. (4) Timer: auction end times managed by scheduled job or delay queue. Soft close: if bid placed in last 5 minutes, extend by 5 minutes (prevents sniping). (5) Notifications: outbid alerts (push + email), ending soon, won/lost via SNS/SQS pipeline. (6) Search: Elasticsearch for auction listings, faceted search (category, price range, location, ending soon). (7) Trust: buyer/seller ratings, fraud detection (shill bidding, bid shielding).",
    tips: "Concurrency on popular auctions is the main challenge. Focus on how you handle simultaneous bids — optimistic locking with retry, or Redis WATCH/MULTI for atomic bid placement."
  },
  {
    id: 435, topic: "System Design", difficulty: "easy",
    scenario: "What is WebRTC and what problems does it solve?",
    options: [
      "WebRTC is a web framework for building REST APIs",
      "WebRTC is a database protocol for real-time queries",
      "WebRTC (Web Real-Time Communication) enables peer-to-peer audio, video, and data transfer directly between browsers without requiring a central server for media relay — used in video calls, screen sharing, and file transfer",
      "WebRTC only works on mobile devices"
    ],
    correctOption: 2,
    answer: "WebRTC provides: (1) getUserMedia — access camera and microphone. (2) RTCPeerConnection — peer-to-peer audio/video streaming with encryption (SRTP), codec negotiation, adaptive bitrate. (3) RTCDataChannel — peer-to-peer arbitrary data transfer (file sharing, gaming). Connection establishment: requires signaling server (WebSocket) to exchange SDP offers/answers (session descriptions). ICE (Interactive Connectivity Establishment) discovers the best path: direct P2P if possible, STUN server to discover public IP behind NAT, TURN server as relay if P2P fails. NAT traversal: STUN works for ~80% of cases, TURN needed for symmetric NATs. WebRTC is browser-native — no plugins needed. Uses: Google Meet, Discord, Zoom web client, peer-to-peer file sharing. Limitation: P2P doesn't scale for large group calls (need SFU/MCU server).",
    tips: "WebRTC is P2P for the media stream, but you still need a server for signaling (exchanging connection info). In interviews, always mention the ICE/STUN/TURN stack for NAT traversal."
  },
  {
    id: 436, topic: "System Design", difficulty: "medium",
    scenario: "What is the star schema and snowflake schema in data warehouse design?",
    options: [
      "Star and snowflake schemas are naming conventions with no structural difference",
      "Star schema has a central fact table surrounded by denormalized dimension tables (one level), while snowflake schema normalizes dimensions into sub-dimensions (multiple levels) — star is simpler and faster for queries, snowflake saves storage and reduces redundancy",
      "Star schema is for OLTP; snowflake is for OLAP",
      "Star schema uses graph databases; snowflake uses relational databases"
    ],
    correctOption: 1,
    answer: "Star schema: central fact table (measurements/events) connected to dimension tables (descriptive attributes). Example: sales_fact (amount, quantity, date_id, product_id, store_id) surrounded by dim_date, dim_product, dim_store. Dimensions are denormalized (dim_product has product_name, category, brand all in one table). Query: simple joins, fast (fewer joins). Snowflake schema: dimensions are normalized into sub-tables. dim_product → dim_category → dim_brand (chain of normalized tables). Reduces data redundancy but requires more joins. Star pros: simpler queries, better query performance (fewer joins), easier for BI tools. Snowflake pros: less storage (no redundancy), easier to maintain (update category name in one place). In practice: star schema is more popular because query performance matters more than storage savings in analytical workloads. Modern columnar databases (Redshift, BigQuery) compress well regardless of redundancy.",
    tips: "Star schema is the default choice for data warehouses — simpler and faster. Snowflake schema is mostly used when dimension tables are very large with significant redundancy. Don't confuse 'snowflake schema' with 'Snowflake' the data warehouse product."
  },
  {
    id: 437, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a hotel reservation system like Booking.com?",
    options: [
      "Simple CRUD API with a reservations table",
      "Use: an availability service with calendar-based inventory (room-nights as atomic units), double-booking prevention via pessimistic locking or compare-and-swap, a pricing engine with dynamic rates, a search service with geospatial and filter-heavy queries, and a booking pipeline with payment pre-authorization and confirmation workflow",
      "Process reservations in daily batches",
      "First-come-first-served with no concurrent booking handling"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Inventory service: room-night as atomic unit (room X on date Y). Availability = unbooked room-nights. Prevent double booking: pessimistic lock on room-night row during checkout, or optimistic lock with version check. For high-demand properties, use Redis SETNX on room-night key. (2) Search: complex multi-filter queries (location, dates, price range, amenities, rating, cancellation policy). Elasticsearch for text/geo search, pre-computed availability counts per property per date range. (3) Pricing engine: dynamic pricing based on demand, season, day of week, events, competitor prices. Revenue management system adjusts rates in real-time. (4) Booking flow: search → select → hold (temporary lock, 10-15 min TTL) → payment pre-auth → confirm → generate booking reference. (5) Cancellation: cancellation policies (free until X, partial refund, non-refundable). Handle rebooking and waitlists. (6) Reviews: verified stays only, aggregate ratings, fake review detection. (7) Notifications: confirmation email, reminder before check-in, review request after checkout. Scale: millions of properties, billions of room-nights, handle flash sales (Black Friday deals).",
    tips: "The double-booking problem is the core challenge — you must prevent two users from booking the same room on the same night. Discuss pessimistic vs optimistic locking trade-offs. Mention the hold/timer pattern to prevent cart abandonment from blocking inventory."
  },
  {
    id: 438, topic: "System Design", difficulty: "easy",
    scenario: "What is the QUIC protocol and why was it created?",
    options: [
      "QUIC is a new version of TCP",
      "QUIC is a UDP-based transport protocol developed by Google that combines the reliability of TCP with the speed of UDP — providing built-in TLS 1.3, multiplexed streams without head-of-line blocking, and faster connection establishment",
      "QUIC is a queue management protocol",
      "QUIC only works on Google Chrome"
    ],
    correctOption: 1,
    answer: "QUIC (Quick UDP Internet Connections): transport protocol built on UDP, designed to replace TCP+TLS for web traffic. Why created: TCP limitations: (1) head-of-line blocking with multiplexed streams, (2) 2-3 RTT handshake (TCP + TLS), (3) ossified in network middleboxes (hard to update TCP protocol). QUIC features: (1) 0-RTT for resumed connections, 1-RTT for new (vs TCP's 3-way + TLS = 2-3 RTTs). (2) Multiplexed streams independently — loss on one stream doesn't block others. (3) TLS 1.3 integrated (always encrypted, no unencrypted mode). (4) Connection migration — identified by connection ID, not IP+port. Switching WiFi to cellular keeps connection alive. (5) Improved loss recovery and congestion control. (6) Built on UDP to bypass middlebox ossification. HTTP/3 = HTTP over QUIC. Adoption: Google services, Cloudflare, Facebook, Akamai.",
    tips: "QUIC solves three TCP problems: head-of-line blocking, slow connection establishment, and connection breakage on network change. It's the foundation of HTTP/3."
  },
  {
    id: 439, topic: "System Design", difficulty: "medium",
    scenario: "What is ETL vs ELT and when would you use each?",
    options: [
      "ETL and ELT are the same thing with different names",
      "ETL transforms data before loading into the warehouse (transform in a staging area), while ELT loads raw data first then transforms inside the warehouse — ELT is preferred in modern cloud data warehouses where compute is elastic and cheap",
      "ETL is for real-time data; ELT is for batch data",
      "ELT is always faster than ETL"
    ],
    correctOption: 1,
    answer: "ETL (Extract, Transform, Load): extract from sources, transform in a separate processing engine (cleaning, joining, aggregating), load transformed data into warehouse. Traditional approach. Pros: warehouse only stores clean data, good for limited warehouse compute. Cons: transformation is a bottleneck (separate compute), schema changes require pipeline redesign, slow iteration. ELT (Extract, Load, Transform): extract from sources, load raw data into warehouse/lake, transform using the warehouse's own compute (SQL, dbt). Modern approach. Pros: leverage warehouse's elastic compute (Snowflake, BigQuery), faster iteration (transform logic is just SQL), raw data preserved for re-transformation, dbt has made ELT transformation testable and version-controlled. Cons: warehouse compute costs, raw data takes more storage. When ETL: legacy systems, sensitive data that shouldn't be stored raw, limited warehouse compute. When ELT: cloud data warehouses, data exploration needs, ML pipelines needing raw data.",
    tips: "dbt (data build tool) has made ELT the modern standard. In interviews, mention dbt for the transformation layer in ELT pipelines — it brings software engineering practices (version control, testing, documentation) to SQL transformations."
  },
  {
    id: 440, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a movie ticket booking system like BookMyShow or Fandango?",
    options: [
      "Simple form submission to book seats",
      "Use: real-time seat map with WebSocket updates, temporary seat locking (hold for 8-10 min during checkout), optimistic concurrency for high-demand shows, payment integration with idempotency, and a tiered caching strategy for show listings vs seat availability",
      "Queue all bookings and process them one at a time",
      "Allow overbooking and resolve conflicts later"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Show/theater catalog: movie → theaters → showtimes → seat maps. Cached in Redis (rarely changes). (2) Seat selection: visual seat map (React canvas/SVG). Real-time availability via WebSocket — when someone selects/books a seat, all viewers see it update. (3) Seat locking: when user selects seats, temporarily lock them (Redis SETNX with 8-10 min TTL). If user doesn't complete booking, seats auto-release. Prevents: same seats showing available to two users simultaneously. (4) Booking flow: select seats → lock → payment → confirm → unlock held seats, mark as booked. (5) Concurrency: for extremely popular shows (opening night), use queue-based booking (virtual waiting room). Only N users can select seats simultaneously. (6) Payment: pre-authorize before seat lock. Capture on booking confirmation. Handle partial failures (payment succeeds but booking fails → refund). Idempotency keys prevent double charges. (7) Anti-scalping: CAPTCHA, rate limiting per user, booking limits per account, IP-based throttling. (8) Search: by movie (all showtimes across theaters), by theater (all movies), by time (what's playing now/tonight). Elasticsearch with geo-filtering.",
    tips: "The seat locking mechanism is the core challenge. Discuss the TTL-based temporary lock pattern (Redis SETNX + EXPIRE). This is similar to the flash sale problem but with a visual component (seat map)."
  },
  {
    id: 441, topic: "System Design", difficulty: "easy",
    scenario: "What is gRPC and how does it differ from REST?",
    options: [
      "gRPC is a high-performance RPC framework using Protocol Buffers for serialization and HTTP/2 for transport — offering strongly typed contracts, streaming, and better performance than REST's text-based JSON over HTTP/1.1",
      "gRPC and REST are identical protocols",
      "gRPC is only for Google services",
      "gRPC is slower than REST because of binary encoding overhead"
    ],
    correctOption: 0,
    answer: "gRPC: Remote Procedure Call framework by Google. Uses Protocol Buffers (protobuf) for serialization (binary, compact, schema-defined) and HTTP/2 for transport. REST: architectural style using HTTP methods (GET/POST/PUT/DELETE) with JSON payloads. Key differences: (1) Serialization: protobuf (binary, 3-10x smaller than JSON) vs JSON (text, human-readable). (2) Contract: .proto files define strongly-typed service interfaces (code generation for client/server). REST uses OpenAPI/Swagger (optional). (3) Streaming: gRPC supports server-streaming, client-streaming, and bidirectional streaming natively. REST is request-response only (need WebSocket for streaming). (4) Performance: gRPC is 2-10x faster (binary encoding + HTTP/2 multiplexing). (5) Browser support: REST works everywhere. gRPC needs grpc-web proxy for browser clients. Use gRPC: microservice-to-microservice communication, low-latency requirements, polyglot environments. Use REST: public APIs, browser-facing APIs, simplicity.",
    tips: "gRPC for internal microservice communication, REST for external/public APIs. This is the most common pattern. Mention protobuf's backward compatibility (add fields without breaking old clients) as a key advantage."
  },
  {
    id: 442, topic: "System Design", difficulty: "medium",
    scenario: "What is the hexagonal architecture (ports and adapters) pattern?",
    options: [
      "An architecture where the application is shaped like a hexagon in the code structure",
      "Hexagonal architecture isolates core business logic from external concerns (databases, APIs, UI) through ports (interfaces) and adapters (implementations) — the core domain has no dependencies on infrastructure, making it testable and swappable",
      "A microservices pattern where each service has six endpoints",
      "A database sharding strategy using hexagonal grid partitions"
    ],
    correctOption: 1,
    answer: "Hexagonal architecture (Alistair Cockburn, 2005): Core domain (inside the hexagon) contains business logic with zero dependencies on external systems. Ports: interfaces defined by the core (e.g., UserRepository, PaymentGateway, NotificationSender). Adapters: implementations that connect ports to external systems (PostgresUserRepository, StripePaymentAdapter, SESNotificationAdapter). Two types of ports: (1) Driving/primary ports (left side): how the outside world calls the application (REST controller, CLI, message consumer). (2) Driven/secondary ports (right side): how the application calls external systems (database, cache, external APIs). Benefits: (1) Testability — mock adapters for unit tests, test core logic without infrastructure. (2) Swappability — switch from Postgres to MySQL by writing a new adapter, core unchanged. (3) Framework independence — core doesn't depend on Spring, Express, etc. Related patterns: Clean Architecture (Robert C. Martin), Onion Architecture — all share the dependency inversion principle (dependencies point inward).",
    tips: "The key rule: dependencies always point inward (from adapters toward the core). The core never imports from infrastructure packages. In Spring Boot, this means your domain service interfaces live in the domain package, and the JPA implementation lives in an infrastructure package."
  },
  {
    id: 443, topic: "System Design", difficulty: "hard",
    scenario: "How would you design a dating app matching system like Tinder or Bumble?",
    options: [
      "Show random profiles to all users",
      "Use: a geospatial user index for proximity-based discovery, a recommendation engine that learns from swipe patterns, Elo/Gale-Shapley inspired ranking for match quality, real-time match notification, and anti-abuse measures — all while minimizing bias and optimizing for mutual interest",
      "Match users alphabetically",
      "Let users search for specific profiles like a directory"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Profile service: photos (CDN), bio, preferences (age range, distance, gender). (2) Discovery: geospatial index (Redis GEO or PostGIS) to find users within radius. Filter by preferences (age, gender, already swiped). (3) Card stack generation: for each user session, generate a ranked stack of 50-100 profiles. Ranking factors: compatibility score (shared interests, preference match), attractiveness balance (show profiles of similar 'desirability' using an Elo-like score based on swipe ratios), freshness (boost new profiles), diversity (vary profile types). (4) Matching: when both users swipe right, create a match. Real-time notification via WebSocket/push. (5) Scoring: implicit feedback from swipes trains the recommendation model. Features: profile quality (photo count, bio length), behavioral (swipe patterns, message response rate), contextual (time, location). (6) Anti-abuse: photo verification (selfie matching), bot detection (swipe speed patterns), report system, shadow banning. (7) Fairness: prevent echo chambers, ensure diverse exposure, don't create 'have/have-not' dynamics with the scoring system.",
    tips: "The 'desirability score' is controversial but important to understand. Tinder's Elo-like system was replaced with a more complex ML model. The key insight: you want to show profiles where mutual interest is most likely, not just profiles the user might like."
  },
  {
    id: 444, topic: "System Design", difficulty: "easy",
    scenario: "What are the layers of the TCP/IP model?",
    options: [
      "The TCP/IP model has 4 layers: Application (HTTP, DNS, SMTP), Transport (TCP, UDP), Internet/Network (IP, ICMP), and Link/Network Access (Ethernet, WiFi) — data gets encapsulated at each layer as it moves down the stack",
      "TCP/IP has 7 layers identical to the OSI model",
      "TCP/IP only has 2 layers: TCP and IP",
      "The TCP/IP model has been replaced by a newer model"
    ],
    correctOption: 0,
    answer: "TCP/IP model (4 layers, bottom to top): (1) Link/Network Access: handles physical transmission on the local network segment. Protocols: Ethernet (frames, MAC addresses), WiFi (802.11), ARP (IP to MAC resolution). (2) Internet/Network: handles routing packets across networks. Protocols: IP (addressing, packet forwarding), ICMP (error messages, ping), routing protocols (BGP, OSPF). (3) Transport: end-to-end communication between processes. TCP (reliable, ordered, connection-oriented) and UDP (unreliable, fast, connectionless). Port numbers identify processes. (4) Application: user-facing protocols. HTTP/HTTPS, DNS, SMTP, FTP, SSH, WebSocket. Encapsulation: application data → TCP segment (add port numbers) → IP packet (add IP addresses) → Ethernet frame (add MAC addresses) → physical bits. Each layer adds its own header. OSI model has 7 layers (adds Presentation and Session between Transport and Application), but TCP/IP's 4-layer model is what's actually used in practice.",
    tips: "Know the 4 layers and one protocol per layer. The most common interview follow-up: 'What happens when you type google.com in a browser?' — walk through each layer (DNS → TCP handshake → HTTP request → render)."
  },
  {
    id: 445, topic: "System Design", difficulty: "medium",
    scenario: "What is CDC (Change Data Capture) and how is it implemented?",
    options: [
      "CDC is a backup strategy for databases",
      "CDC is only available in NoSQL databases",
      "CDC captures and streams database changes (inserts, updates, deletes) in real-time to downstream systems — implemented via log-based capture (reading the database's WAL/binlog), enabling event-driven architectures without modifying application code",
      "CDC stands for Content Delivery Cache"
    ],
    correctOption: 2,
    answer: "CDC approaches: (1) Log-based (preferred): read database's write-ahead log (PostgreSQL WAL, MySQL binlog, MongoDB oplog). Minimal performance impact on source DB (reading a log, not querying tables). Captures ALL changes including deletes. Tools: Debezium (open source, Kafka Connect based), AWS DMS, Maxwell. (2) Query-based: periodically query source tables for changes (using timestamp/version column). Simpler but: misses deletes, creates load on source DB, has latency. (3) Trigger-based: database triggers capture changes to a shadow table. Complete but: significant performance overhead, complex trigger management. Use cases: (1) Event-driven microservices: capture changes from service A's DB, publish as events for service B. (2) Cache invalidation: update Redis when database changes. (3) Search index sync: update Elasticsearch when records change. (4) Data warehouse loading: stream changes to analytics. (5) Audit trail: capture all changes for compliance. Debezium + Kafka is the most popular CDC setup.",
    tips: "Log-based CDC (Debezium) is the gold standard — it's non-invasive, captures all changes, and preserves ordering. Always mention it over query-based or trigger-based approaches in interviews."
  },
  {
    id: 446, topic: "System Design", difficulty: "hard",
    scenario: "How would you design an airline booking system?",
    options: [
      "A simple search form connected to a database of flights",
      "Use: a distributed fare search engine with complex pricing rules, inventory management with nested booking classes, PNR (Passenger Name Record) creation, seat assignment, GDS integration, and payment processing with hold-and-capture — handling overbooking strategies and schedule changes",
      "Partner with airlines to redirect users to their websites",
      "Cache all flight data and update once daily"
    ],
    correctOption: 1,
    answer: "Architecture: (1) Search: most complex part. Fare rules are extremely complex (advance purchase, min/max stay, blackout dates, combinability). Pre-compute popular routes, on-demand for rare ones. Multi-city/open-jaw itineraries require graph search algorithms. Cache aggressively (prices change every few minutes). (2) Inventory: airlines use booking classes (Y=full economy, B/H/K=discount). Each class has limited seats. Nested availability: selling a Y seat reduces availability of cheaper classes. (3) Booking flow: search → select → create PNR (reservation record with passenger info, itinerary, contact) → seat assignment (optional) → payment (hold fare for 24h, charge at ticketing). (4) GDS integration: most airlines distribute via Global Distribution Systems (Amadeus, Sabre, Travelport). API integration for availability, booking, ticketing. NDC (New Distribution Capability) is the modern alternative. (5) Pricing: fare + taxes + surcharges. Dynamic pricing based on demand, competitor fares, time to departure. Revenue management adjusts class availability. (6) Overbooking: airlines intentionally overbook (5-15%) because ~10% of passengers are no-shows. Statistical model calculates optimal overbooking level. (7) Disruptions: schedule changes, cancellations, re-accommodation.",
    tips: "Airline systems are among the most complex in tech. The pricing engine alone is a massive design challenge. Focus on the search/pricing complexity and the overbooking strategy — interviewers love the business logic trade-offs."
  },
  {
    id: 447, topic: "System Design", difficulty: "easy",
    scenario: "What is NAT (Network Address Translation) and why does it exist?",
    options: [
      "NAT translates private IP addresses to public IP addresses at the router, allowing multiple devices on a local network to share a single public IP — it was created because IPv4 addresses are limited (only 4.3 billion)",
      "NAT is a DNS alternative",
      "NAT encrypts network traffic between two points",
      "NAT only works with IPv6"
    ],
    correctOption: 0,
    answer: "Problem: IPv4 has ~4.3 billion addresses, not enough for all devices. Solution: NAT allows an entire private network to share one public IP. How it works: (1) Private network uses reserved ranges (192.168.x.x, 10.x.x.x, 172.16-31.x.x). (2) Router maintains a translation table: (private_IP:port → public_IP:port). (3) Outgoing: router replaces source IP with public IP, records mapping. (4) Incoming: router looks up mapping, forwards to correct private IP. Types: (1) Static NAT: one-to-one mapping (1 private IP → 1 public IP). (2) Dynamic NAT: pool of public IPs assigned on demand. (3) PAT (Port Address Translation) / NAT overload: many private IPs share one public IP (distinguished by port numbers). Most common. Implications for system design: direct P2P connections are difficult (WebRTC needs STUN/TURN), port forwarding required for hosting servers behind NAT, IPv6 eliminates the need for NAT (128-bit addresses = virtually unlimited).",
    tips: "NAT is why WebRTC, online gaming, and P2P applications are complex. The key challenge: devices behind NAT can initiate outbound connections but can't easily receive inbound ones. STUN/TURN solve this for WebRTC."
  },
  {
    id: 448, topic: "System Design", difficulty: "medium",
    scenario: "What is domain-driven design (DDD) and how does it apply to microservices?",
    options: [
      "DDD is a CSS framework for designing web domains",
      "DDD is a database design methodology focused on normalization",
      "DDD structures software around the business domain using bounded contexts, aggregates, and ubiquitous language — bounded contexts naturally map to microservice boundaries, ensuring each service owns a cohesive domain with clear interfaces",
      "DDD is only for monolithic applications"
    ],
    correctOption: 2,
    answer: "DDD key concepts: (1) Ubiquitous Language: developers and domain experts use the same terminology. 'Order' means the same thing in code and business conversations. (2) Bounded Context: a boundary within which a domain model is consistent. 'Customer' in billing context (payment info, invoices) differs from 'Customer' in support context (tickets, SLA). Each bounded context has its own model. (3) Aggregate: cluster of entities treated as a unit for data changes. Order aggregate = Order + OrderLines + ShippingInfo. Consistency enforced within aggregate boundaries. (4) Aggregate Root: the entry point to an aggregate (Order is the root; you don't modify OrderLine directly). (5) Domain Events: significant occurrences (OrderPlaced, PaymentReceived). Enable loose coupling between bounded contexts. Mapping to microservices: each bounded context → one microservice. Communication between contexts via domain events (async messaging) or API calls. Anti-corruption layer: adapter between contexts to translate models. Strategic DDD: context mapping shows relationships between bounded contexts (shared kernel, customer-supplier, conformist, etc.).",
    tips: "DDD is the best tool for identifying microservice boundaries. If two concepts share the same language and change together, they belong in the same service. If 'Customer' means different things in different contexts, they should be separate services."
  },
  {
    id: 449, topic: "System Design", difficulty: "hard",
    scenario: "What is Byzantine Fault Tolerance and when is it needed?",
    options: [
      "Byzantine faults only occur in very old computer systems",
      "Byzantine Fault Tolerance (BFT) handles scenarios where nodes can behave arbitrarily (lying, sending conflicting messages, colluding) — requiring 3f+1 nodes to tolerate f Byzantine faults, making it much more expensive than crash fault tolerance but essential for untrusted environments like blockchain",
      "Byzantine faults are the same as network partitions",
      "All distributed systems need BFT to function correctly"
    ],
    correctOption: 1,
    answer: "Byzantine Generals Problem (Lamport, 1982): generals must agree on attack/retreat, but some may be traitors sending conflicting messages. Byzantine fault: a node behaves arbitrarily — crash, send wrong data, send different values to different peers, collude with other faulty nodes. Crash fault: node simply stops (detectable). Byzantine fault: node may actively deceive (much harder). BFT requires 3f+1 nodes to tolerate f faults (vs 2f+1 for crash faults). PBFT (Practical BFT, Castro-Liskov 1999): three phases — pre-prepare, prepare, commit. O(n²) message complexity. Tolerates f < n/3 faulty nodes. When needed: blockchain/cryptocurrency (untrusted participants), financial systems with regulatory requirements, aerospace/military (hardware faults causing wrong outputs), multi-party computation. When NOT needed: traditional distributed systems (internal services) — use Raft/Paxos (crash fault tolerance). BFT is much more expensive (more nodes, more messages), only justified when you can't trust all participants.",
    tips: "Most system design interviews don't require BFT — Raft/Paxos handle crash faults which are the common case for internal systems. Only mention BFT if the question involves untrusted participants (blockchain, cross-organization systems)."
  },
  {
    id: 450, topic: "System Design", difficulty: "easy",
    scenario: "What is the difference between anycast and unicast routing?",
    options: [
      "Anycast and unicast are the same thing",
      "Unicast routes packets to one specific destination, while anycast routes packets to the nearest node sharing the same IP address — anycast is used by CDNs and DNS to direct users to the closest server geographically",
      "Anycast sends packets to all nodes simultaneously",
      "Unicast is for TCP only; anycast is for UDP only"
    ],
    correctOption: 1,
    answer: "Unicast: one sender → one specific receiver. Each IP address identifies exactly one destination. Standard for most internet communication. Anycast: one sender → nearest of many receivers sharing the same IP. Multiple servers worldwide advertise the same IP address via BGP. Network routes packets to the closest one (by network hops, not geographic distance). Use cases: (1) CDN — CloudFlare, AWS CloudFront advertise anycast IPs. User's DNS query reaches nearest PoP automatically. (2) DNS — root DNS servers use anycast (13 root addresses map to hundreds of actual servers worldwide). (3) DDoS mitigation — anycast spreads attack traffic across many servers. Multicast (for comparison): one sender → multiple specific receivers (group membership). Used for IPTV, stock market feeds. Broadcast: one sender → all nodes on network segment. Limited to local network. Anycast works great for stateless protocols (DNS, CDN) but is tricky for stateful connections (TCP) because route changes mid-connection can send packets to a different server.",
    tips: "Anycast is how Cloudflare serves 300+ cities from the same IP address. It's the simplest form of geographic load balancing — the network does it automatically via BGP routing."
  },
];

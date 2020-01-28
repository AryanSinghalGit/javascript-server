The Twelve Factors
===
# 1. Codebase
**There should be exactly one codebase for a deployed service with the codebase being used for many deployments.**

There is always a one-to-one correlation between the codebase and the app:
* If there are multiple codebases, it’s not an app – it’s a distributed system. Each component in a distributed system is an app, and each can individually comply with twelve-factor.
* Multiple apps sharing the same code is a violation of twelve-factor. The solution here is to factor shared code into libraries which can be included through the dependency manager.

# 2.	Dependencies
**All dependencies should be declared, with no implicit reliance on system tools or libraries.**
A twelve-factor app never relies on implicit existence of system-wide packages. It declares all dependencies, completely and exactly, via a dependency declaration manifest. Furthermore, it uses a dependency isolation tool during execution to ensure that no implicit dependencies “leak in” from the surrounding system. The full and explicit dependency specification is applied uniformly to both production and development.

# 3. Config
**Configuration that varies between deployments should be stored in the environment.**
An app’s config is everything that is likely to vary between deploys (staging, production, developer environments, etc). This includes:
* Resource handles to the database, Memcached, and other backing services
* Credentials to external services such as Amazon S3 or Twitter
* Per-deploy values such as the canonical hostname for the deploy

# 4.	Backing services
**All backing services are treated as attached resources and attached and detached by the execution environment.**
A backing service is any service the app consumes over the network as part of its normal operation. Examples include datastores (such as MySQL or CouchDB), messaging/queueing systems (such as RabbitMQ or Beanstalkd), SMTP services for outbound email (such as Postfix), and caching systems (such as Memcached).

# 5.	Build, release, run	
**The delivery pipeline should strictly consist of build, release, run.**

A codebase is transformed into a (non-development) deploy through three stages:

* The build stage is a transform which converts a code repo into an executable bundle known as a build. Using a version of the code at a commit specified by the deployment process, the build stage fetches vendors dependencies and compiles binaries and assets.
* The release stage takes the build produced by the build stage and combines it with the deploy’s current config. The resulting release contains both the build and the config and is ready for immediate execution in the execution environment.
* The run stage (also known as “runtime”) runs the app in the execution environment, by launching some set of the app’s processes against a selected release.

# 6.	Processes
**Applications should be deployed as one or more stateless processes with persisted data stored on a backing service.**

In the simplest case, the code is a stand-alone script, the execution environment is a developer’s local laptop with an installed language runtime, and the process is launched via the command line (for example, python my_script.py). On the other end of the spectrum, a production deploy of a sophisticated app may use many process types, instantiated into zero or more running processes.

# 7.	Port binding	
**Self-contained services should make themselves available to other services by specified ports.**
The twelve-factor app is completely self-contained and does not rely on runtime injection of a webserver into the execution environment to create a web-facing service. The web app exports HTTP as a service by binding to a port, and listening to requests coming in on that port.

# 8.	Concurrency
**Concurrency is advocated by scaling individual processes.**
Any computer program, once run, is represented by one or more processes. Web apps have taken a variety of process-execution forms. For example, PHP processes run as child processes of Apache, started on demand as needed by request volume. Java processes take the opposite approach, with the JVM providing one massive uberprocess that reserves a large block of system resources (CPU and memory) on startup, with concurrency managed internally via threads. In both cases, the running process(es) are only minimally visible to the developers of the app.

# 9.	Disposability	
**Fast startup and shutdown are advocated for a more robust and resilient system.**
Processes should strive to minimize startup time. Ideally, a process takes a few seconds from the time the launch command is executed until the process is up and ready to receive requests or jobs. Short startup time provides more agility for the release process and scaling up; and it aids robustness, because the process manager can more easily move processes to new physical machines when warranted.

# 10.	Dev/Prod parity
**All environments should be as similar as possible.**

Historically, there have been substantial gaps between development (a developer making live edits to a local deploy of the app) and production (a running deploy of the app accessed by end users). These gaps manifest in three areas:

* **The time gap:** A developer may work on code that takes days, weeks, or even months to go into production.
* **The personnel gap:** Developers write code, ops engineers deploy it.
* **The tools gap:** Developers may be using a stack like Nginx, SQLite, and OS X, while the production deploy uses Apache, MySQL, and Linux.

# 11.	Logs
**Applications should produce logs as event streams and leave the execution environment to aggregate.**
Logs provide visibility into the behavior of a running app. In server-based environments they are commonly written to a file on disk (a “logfile”); but this is only an output format.

# 12. 	Admin Processes
**Any needed admin tasks should be kept in source control and packaged with the application.**
One-off admin processes should be run in an identical environment as the regular long-running processes of the app. They run against a release, using the same codebase and config as any process run against that release. Admin code must ship with application code to avoid synchronization issues.
I. Test automation
  a. Why test? Shouldnt you write bug-free code the first time?
    - The primary purpose is increased confidence in refactoring
    - Misconception: automated tests are intended to "catch" bugs
    - How do you write a test to catch a bug you dont yet know about?
    - Instead, a robust test suite encourages refactoring
    - Refactoring is critical to increasing code quality
    - Increased code quality means fewer and less severe bugs
    - So there is a correlation, but it is indirect
  b. Two types of test
    - Unit: the smallest testable part, often function or procedure
    - Integration, aka end to end (e2e): actions propagating through the system
    - Unit tests are small, fast and well defined, but limited in scope
    - e2e tests cover more "real world" scenarios (mouse click on results button)
    - but tend to be slow and fragile
  c. Using tests
    - Tests are zero use if they dont get run
    - Common setup watches local files and run tests on any change
    - Unit tests are a canary: alerts you to unexpected dependencies
    - Once the feature is finished, e2e tests often run as part of deployment
    - Usually setup consists of two tools: test framework and test runner
  d. Writing tests
    - New code needs new tests
    - Tests can be written before, during, or after writing the code
    - Opinions vary on which approach is best
    - But any code change should have a corresponding test change
  d. How to write a good unit test
    - All procedures operate in terms of input and output
    - Think about your tests in these terms
    - Pretend the interior of the procedure is a black box
    - Instead, describe every use case from the outside
  e. How to write a good e2e test
    - e2e tests tend to be more fragile: many prereqs/dependencies
    - Maintaining a large e2e suite can get expensive
    - The importance of e2e test cases is a business decision
    - The most basic level of e2e test: make sure the page loaded
    - More specific tests target use cases
  f. TDD
    - Test Driven Development
    - Simply means: write tests before code
    - Tests fail immediately
    - Next, write code to make it pass
    - This is called red/green refactor
  g. Advantages of TDD
    - Thinking about use cases for tests means thinking about code as API
    - Makes test coverage a primary goal rather than an afterthought
    - Shortens the self-feedback cycle: spend less time going down dead ends
    - Strong test coverage increases confidence in refactoring
    - Test suite can serve as ad-hoc API documentation: how code should be used
  h. About Selenium
    - Selenium is a suite of browser based test tools
    - Basic purpose is to automate browser actions, like clicking a link
    - Other tools in the suite extend functionality
    - Selenium IDE: Firefox plugin to record & playback user actions locally
    - Selenium Remote Control: hosted proxy to playback actions anywhere
    - WebDriver: OS API to control browser (IDE/RC use JS)
    - Selenium Grid: network of WebDriver hosts to execute in parallel
II. In Practice (lab)
  i. Get started with Jasmine
    - npm install --save-dev jasmine 
    - mkdir [app]/test && cd !$
    - Create one or more files, [app]/test/featureName.spec.js
    - Within those files, add describe('Feature name', func...
    - Inside describe, add it(' should fail at first', func...
    - Inside function, add a failing assertion
    - expect(ourVariable).toEqual(1)
    - npm install --save-dev karma
    - karma is a test runner: runs test framework (jasmine) & reports out
    - create test/karma.conf.js
    - start karma on the command line, or create a grunt task
  j. Do TDD
    - write code to set ourVariable = 1
    - load that code through karma.conf
    - run passing tests

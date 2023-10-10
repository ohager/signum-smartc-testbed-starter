# signum-smartc-testbed-starter

Starter Project for developing Signum Smart Contracts with [SmartC](https://github.com/deleterium/SmartC) using TDD

> Note: this project is still in an early development phase, but used for real world projects already. There might be changes in the interface, but the basic functionality is pretty stable already.

## Motivation

Developing Smart Contracts requires some additional caution, as 1) contracts cannot be changed once in production, 2) can involve significant costs when something fails.
The [SmartC Simulator](https://deleterium.info/sc-simulator/) is a great environment to test and debug Smart Contracts, but it is very time-consuming to test all possible execution paths on the visual environment.
This can cause testing fatigue and lead to erroneous code. Applying [TDD](https://en.wikipedia.org/wiki/Test-driven_development) technique can come to help here. 
As of my own experience, the contracts testing coverage is higher and even the development itself is faster. 

This project shall help Smart Contract Developer to set up a TDD testbed quickly, such s/he can focus on the contract implementation.

## Prerequisites

Having [NodeJS](https://nodejs.org/en/download) 18+ installed

It's recommended to use `nvm` to install/manage different NodeJS versions on your computer.

- Windows: https://github.com/coreybutler/nvm-windows
- Linux/MacOS: https://github.com/nvm-sh/nvm


## How does it work?

This project uses the [Signum SmartC Testbed](https://github.com/ohager/signum-smartc-testbed) package and [Vitest Test Runner](https://vitest.dev/).
The Testbed uses the isolated [SmartC Simulator](https://www.npmjs.com/package/smartc-signum-simulator) under the hood. 
Using the testbed, one can load a contract, initialize it and entirely interact with it (see [Testbed API](https://ohager.github.io/signum-smartc-testbed/index.html)).
The testbed simulates all blockchain transactions, gives access to internal data structures (memory stack, maps etc) of the contract and complete control over 
the entire environment - __No own Blockchain Node needed, no costs involved__.   

Note, that it's not possible (yet) to debug the SmartC code directly (use the [SmartC Simulator](https://deleterium.info/sc-simulator/) instead)   

## How to use?

Use this project either as a template for your own github repository. Or use `tiged` (or `degit`) to create a unversioned local copy

`npx tiged git@github.com:ohager/signum-smartc-testbed-starter.git <your-project-folder>`

Then go into `<your-project-folder>` and run `npm install` to set up all dependencies.

Running `npm test` should run the test suite for the `sample-contract` and you should see something like this:

```
$ npm t

> signum-smartc-testbed-starter@1.0.0 test
> vitest run --single-thread


 RUN  v0.34.6 /home/ohager/code/signum/signum-smartc-testbed-starter

stdout | sample-contract/update-percentage/update-percentage.test.ts > Sample Contract - Update Percentage > should update percentage as expected
C contract successfully compiled and deployed with id 999 on slot 0. Ready to run
Block #2 forged!
Block #3 forged!
Block #4 forged!
Block #5 forged!
Block #6 forged!

stdout | sample-contract/update-percentage/update-percentage.test.ts > Sample Contract - Update Percentage > should not update percentage as sender is not creator
C contract successfully compiled and deployed with id 999 on slot 0. Ready to run
Block #2 forged!
Block #3 forged!
Block #4 forged!
Block #5 forged!
Block #6 forged!

...

stdout | sample-contract/set-map-value/set-map-value.test.ts > Sample Contract - Set Map Value > should set map values as expected
C contract successfully compiled and deployed with id 999 on slot 0. Ready to run
Block #2 forged!
Block #3 forged!
Block #4 forged!
Block #5 forged!
Block #6 forged!
Block #7 forged!
Block #8 forged!

 ✓ sample-contract/update-percentage/update-percentage.test.ts (2)
 ✓ sample-contract/pull-funds/pull-funds.test.ts (2)
 ✓ sample-contract/forward-percentage/forward-percentage.test.ts (4)
 ✓ sample-contract/set-map-value/set-map-value.test.ts (1)

 Test Files  4 passed (4)
      Tests  9 passed (9)
   Start at  09:41:01
   Duration  1.31s (transform 73ms, setup 0ms, collect 759ms, tests 248ms, environment 0ms, prepare 100ms)
```

You are set up!

### Project Structure

```
├── package.json
├── package-lock.json
├── README.md
├── sample-contract
│   ├── context.ts
│   ├── CONTRACT_API.md
│   ├── forward-percentage
│   │   ├── forward-percentage.scenarios.ts
│   │   └── forward-percentage.test.ts
│   ├── pull-funds
│   │   ├── pull-funds.scenarios.ts
│   │   └── pull-funds.test.ts
│   ├── sample-contract.smart.c
│   ├── set-map-value
│   │   ├── set-map-value.scenarios.ts
│   │   └── set-map-value.test.ts
│   └── update-percentage
│       ├── update-percentage.scenarios.ts
│       └── update-percentage.test.ts
├── tsconfig.json
└── vitest.config.ts
```

As of my own experience it seems to be a good practice to keep a folder per smart contract, here: `sample-contract`.
I often have contracts with multiple functionality, which are split into methods. As per TDD practice I test each method 
in an isolated manner, i.e. here per folder.

Inside a contracts folder you should have:

- the contract itself, here: `sample-contract.smart.c`
- a markdown file to describe the API of a contract, here: `CONTRACT_API.md` 
- a file with contracts constants, like account numbers, method Ids, Map Ids, etc, here: `context.ts`
- a folder per function, which has the scenarios (in form of JSONs) defined, and the test suite itself, example here: `set-map-value`


### How to debug

With VSCode or WebStorm it's pretty straightforward. Inside your test suite set break points and run the test in Debug Mode. You should then get access
to all internal variables.

![image](https://github.com/ohager/signum-smartc-testbed-starter/assets/3920663/0b3e54f6-8e60-4768-8830-7521af04ad12)

> Note: If you want to debug the SmartC Code itself, you need to use the SmartC Simulator IDE. It's not possible to debug the contract within the IDEs (yet).



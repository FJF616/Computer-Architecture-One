/**
 * LS-8 v2.0 emulator skeleton code
 */

const fs = require('fs');

// Instructions

const HLT  = 0b00000001; // Halt CPU
// !!! IMPLEMENT ME
const LDI = 0b10011001; 
const MUL = 0b10101010;
const PRN = 0b01000011;
const ADD = 0b10101000;
/**
 * Class for simulating a simple Computer (CPU & memory)
 */
class CPU {

    /**
     * Initialize the CPU
     */
    constructor(ram) {
        this.ram = ram;

        this.reg = new Array(8).fill(0); // General-purpose registers
        
        // Special-purpose registers
        this.reg.PC = 0; // Program Counter
        this.reg.IR = 0; // Instruction Register

		this.setupBranchTable();
    }
	
	/**
	 * Sets up the branch table
	 */
	setupBranchTable() {
		let bt = {};

        bt[HLT] = this.HLT;
        bt[ADD] = this.ADD;
        bt[MUL] = this.MUL;
        bt[LDI] = this.LDI;
        bt[PRN] = this.PRN;
        // !!! IMPLEMENT ME
        // LDI
        // MUL
        // PRN

		this.branchTable = bt;
	}

    /**
     * Store value in memory address, useful for program loading
     */
    poke(address, value) {
        this.ram.write(address, value);
    }

    /**
     * Starts the clock ticking on the CPU
     */
    startClock() {
        const _this = this;

        this.clock = setInterval(() => {
            _this.tick();
        }, 1);
    }

    /**
     * Stops the clock
     */
    stopClock() {
        clearInterval(this.clock);
    }

    /**
     * ALU functionality
     * 
     * op can be: ADD SUB MUL DIV INC DEC CMP
     */
    alu(op, regA, regB) {
        switch (op) {
            case 'MUL':
                // !!! IMPLEMENT ME
                this.reg[regA] = this.reg[A] * this.reg[B];

                break;
            case 'ADD':
                // IMPLEMENT ME
                this.reg[regA] = this.reg[regA] + this.reg[regB];
                regA = regA + regB
                break;
            }
    }

    /**
     * Advances the CPU one cycle
     */
    tick() {
        // Load the instruction register (IR) from the current PC
        // !!! IMPLEMENT ME
        this.reg.IR = this.ram.read(this.reg.PC);
        // Debugging output
        console.log(`${this.reg.PC}: ${this.reg.IR.toString(2)}`);

        // Based on the value in the Instruction Register, locate the
        // appropriate hander in the branchTable
        // !!! IMPLEMENT ME
        let handler = this.branchTable[this.reg.IR];

        // Check that the handler is defined, halt if not (invalid
        // instruction)

        if(handler === undefined) {
            console.error('Unknown opcode ' + this.reg.IR);
            this.stopClock();
            return;
        }
        // !!! IMPLEMENT ME
        let operandA = this.mem.read(this.reg.PC +1);
        let operandB = this.mem.read(this.reg.PC +2);

        // We need to use call() so we can set the "this" value inside
        // the handler (otherwise it will be undefined in the handler)
        handler.call(this, operandA, operandB);

        // Increment the PC register to go to the next instruction
        // !!! IMPLEMENT ME
        // need to know how many bytes to move along
       reg.PC++; 
    }

    // INSTRUCTION HANDLER CODE:
  /**
     * ADD RR
     */
    ADD(regA, regB) {
        this.alu('ADD', regA, regB);
    }
    /**
     * HLT
     */
<<<<<<< HEAD
    HLT(regA, regB) {
        // !!! IMPLEMENT ME
        this.alu('HLT', regA, regB);
=======
    HLT() {
        this.stopClock();
>>>>>>> 36e3429d3110215ffe61e9ec300f63f7b0745e71
    }

    /**
     * LDI R,I
     */
<<<<<<< HEAD
    LDI(regNum, value) {
        this.reg[regNum] = value & 255;    // !!! IMPLEMENT ME
=======
    LDI(reg, value) {
        // !!! IMPLEMENT ME
>>>>>>> 36e3429d3110215ffe61e9ec300f63f7b0745e71
    }

    /**
     * MUL R,R
     */
    MUL(regA, regB) {
        // !!! IMPLEMENT ME
<<<<<<< HEAD
        this.alu('MUL', regA, regB);
=======
>>>>>>> 36e3429d3110215ffe61e9ec300f63f7b0745e71
        // Call the ALU
    }

    /**
     * PRN R
     */
    PRN(regA) {
<<<<<<< HEAD
        console.log(this.reg[regA]);
=======
>>>>>>> 36e3429d3110215ffe61e9ec300f63f7b0745e71
        // !!! IMPLEMENT ME

    }
}

module.exports = CPU;

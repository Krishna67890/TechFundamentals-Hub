export const fullComputerArchitectureQuiz = {
  title: "Computer Architecture Mastery Quiz",
  topicId: "computer-architecture-mastery",
  timeLimit: 7200, // 2 hours in seconds
  questions: [
    // Number Systems Questions (20 questions)
    {
      id: 1,
      question: "What is the binary representation of the decimal number 25?",
      options: ["11001", "11010", "10110", "11101"],
      correctAnswer: 0,
      explanation: "25 in decimal equals 1×2⁴ + 1×2³ + 0×2² + 0×2¹ + 1×2⁰ = 16 + 8 + 0 + 0 + 1 = 25"
    },
    {
      id: 2,
      question: "Convert the binary number 1101101 to octal:",
      options: ["155", "165", "175", "157"],
      correctAnswer: 0,
      explanation: "Group as 001 101 101 → 1 5 5 = 155₈"
    },
    {
      id: 3,
      question: "What is the hexadecimal equivalent of decimal 255?",
      options: ["FF", "EF", "FE", "GF"],
      correctAnswer: 0,
      explanation: "255 ÷ 16 = 15 remainder 15 → 15 = F, so FF₁₆"
    },
    {
      id: 4,
      question: "In 2's complement representation, what does the most significant bit indicate?",
      options: ["Parity", "Sign", "Overflow", "Carry"],
      correctAnswer: 1,
      explanation: "In 2's complement, the MSB indicates the sign: 0 for positive, 1 for negative"
    },
    {
      id: 5,
      question: "What is the range of 8-bit signed magnitude representation?",
      options: ["0 to 255", "-127 to +127", "-128 to +127", "-255 to +255"],
      correctAnswer: 1,
      explanation: "8-bit signed magnitude: 1 bit for sign, 7 bits for magnitude → -127 to +127"
    },
    {
      id: 6,
      question: "Which logic gate outputs true only when both inputs are true?",
      options: ["OR", "AND", "NAND", "XOR"],
      correctAnswer: 1,
      explanation: "AND gate: output = A AND B, true only when both A and B are true"
    },
    {
      id: 7,
      question: "What is the result of binary addition 1011 + 1101?",
      options: ["11000", "11010", "10100", "11100"],
      correctAnswer: 1,
      explanation: "1011 + 1101 = 11010₂ (11 + 13 = 24 in decimal)"
    },
    {
      id: 8,
      question: "In floating-point representation, what does the exponent part determine?",
      options: ["Precision", "Range", "Accuracy", "Speed"],
      correctAnswer: 1,
      explanation: "The exponent determines the range of numbers that can be represented"
    },
    {
      id: 9,
      question: "What is the result of 1's complement of 1010?",
      options: ["0101", "0110", "0100", "1011"],
      correctAnswer: 0,
      explanation: "1's complement flips all bits: 1010 → 0101"
    },
    {
      id: 10,
      question: "How many bits are needed to represent 16 different values?",
      options: ["3", "4", "5", "6"],
      correctAnswer: 1,
      explanation: "2⁴ = 16, so 4 bits are needed to represent 16 different values"
    },
    {
      id: 11,
      question: "Which Boolean law states that A + (B · C) = (A + B) · (A + C)?",
      options: ["Commutative Law", "Associative Law", "Distributive Law", "De Morgan's Law"],
      correctAnswer: 2,
      explanation: "This is the Distributive Law of Boolean algebra"
    },
    {
      id: 12,
      question: "What is the result of binary subtraction 1010 - 0111 using 2's complement?",
      options: ["0011", "0101", "0010", "0110"],
      correctAnswer: 0,
      explanation: "1010 - 0111 = 0011₂ (10 - 7 = 3 in decimal)"
    },
    {
      id: 13,
      question: "In IEEE 754 single precision format, how many bits are allocated for the mantissa?",
      options: ["21", "22", "23", "24"],
      correctAnswer: 2,
      explanation: "IEEE 754 single precision: 1 sign + 8 exponent + 23 mantissa = 32 bits"
    },
    {
      id: 14,
      question: "What is the octal equivalent of binary 11110000?",
      options: ["360", "370", "361", "350"],
      correctAnswer: 0,
      explanation: "Group as 011 110 000 → 3 6 0 = 360₈"
    },
    {
      id: 15,
      question: "Which logic gate is known as the 'universal gate'?",
      options: ["AND", "OR", "NOT", "NAND"],
      correctAnswer: 3,
      explanation: "NAND and NOR gates are universal gates as they can implement any Boolean function"
    },
    {
      id: 16,
      question: "What is the result of hexadecimal A5 + 1F?",
      options: ["C4", "B4", "C5", "B5"],
      correctAnswer: 1,
      explanation: "A5₁₆ + 1F₁₆ = 165₁₀ + 31₁₀ = 196₁₀ = B4₁₆"
    },
    {
      id: 17,
      question: "In BCD (Binary Coded Decimal), how many bits represent each decimal digit?",
      options: ["2", "3", "4", "5"],
      correctAnswer: 2,
      explanation: "BCD uses 4 bits to represent each decimal digit (0-9)"
    },
    {
      id: 18,
      question: "What is the Gray code equivalent of binary 1011?",
      options: ["1110", "1101", "1010", "1111"],
      correctAnswer: 0,
      explanation: "Gray code: first bit same, then XOR adjacent bits: 1011 → 1110"
    },
    {
      id: 19,
      question: "Which number system is used internally by computers?",
      options: ["Decimal", "Octal", "Hexadecimal", "Binary"],
      correctAnswer: 3,
      explanation: "Computers use binary internally as it corresponds to electronic on/off states"
    },
    {
      id: 20,
      question: "What is the result of binary multiplication 101 × 11?",
      options: ["1111", "1101", "1011", "1001"],
      correctAnswer: 1,
      explanation: "101₂ × 11₂ = 5₁₀ × 3₁₀ = 15₁₀ = 1111₂, but 101 × 11 = 101 + 1010 = 1111"
    },

    // Computer Types Questions (15 questions)
    {
      id: 21,
      question: "Which type of computer is designed for individual use?",
      options: ["Mainframe", "Supercomputer", "Microcomputer", "Minicomputer"],
      correctAnswer: 2,
      explanation: "Microcomputers are designed for individual use, like personal computers"
    },
    {
      id: 22,
      question: "What is the primary characteristic of a mainframe computer?",
      options: ["Portability", "High reliability and large-scale processing", "Low cost", "Single user focus"],
      correctAnswer: 1,
      explanation: "Mainframes are characterized by high reliability and ability to handle large-scale processing"
    },
    {
      id: 23,
      question: "Which computer type is used for weather forecasting and scientific research?",
      options: ["Microcomputer", "Minicomputer", "Mainframe", "Supercomputer"],
      correctAnswer: 3,
      explanation: "Supercomputers are used for complex calculations like weather forecasting and scientific research"
    },
    {
      id: 24,
      question: "What does FLOPS measure in supercomputers?",
      options: ["Storage capacity", "Memory size", "Processing speed", "Power consumption"],
      correctAnswer: 2,
      explanation: "FLOPS (Floating Point Operations Per Second) measures processing speed of supercomputers"
    },
    {
      id: 25,
      question: "Which computer type typically serves multiple users simultaneously?",
      options: ["Microcomputer", "Workstation", "Laptop", "Mainframe"],
      correctAnswer: 3,
      explanation: "Mainframes are designed to serve hundreds or thousands of users simultaneously"
    },
    {
      id: 26,
      question: "What is the typical use case for minicomputers?",
      options: ["Personal use", "Small organizations and labs", "Massive data processing", "Scientific research"],
      correctAnswer: 1,
      explanation: "Minicomputers are used in small organizations, labs, and as servers"
    },
    {
      id: 27,
      question: "Which computer type has the highest processing power?",
      options: ["Mainframe", "Supercomputer", "Minicomputer", "Microcomputer"],
      correctAnswer: 1,
      explanation: "Supercomputers have the highest processing power among all computer types"
    },
    {
      id: 28,
      question: "What is the main advantage of microcomputers?",
      options: ["High processing power", "Low cost", "Multi-user capability", "High reliability"],
      correctAnswer: 1,
      explanation: "The main advantage of microcomputers is their low cost and personal usability"
    },
    {
      id: 29,
      question: "Which computer type is commonly used in banks for transaction processing?",
      options: ["Supercomputer", "Microcomputer", "Mainframe", "Minicomputer"],
      correctAnswer: 2,
      explanation: "Mainframes are commonly used in banks for secure, reliable transaction processing"
    },
    {
      id: 30,
      question: "What is the primary limitation of supercomputers?",
      options: ["Portability", "High cost", "Low processing power", "Limited software"],
      correctAnswer: 1,
      explanation: "Supercomputers have extremely high costs, which is their primary limitation"
    },
    {
      id: 31,
      question: "Which computer type is most commonly used today?",
      options: ["Mainframe", "Supercomputer", "Minicomputer", "Microcomputer"],
      correctAnswer: 3,
      explanation: "Microcomputers (desktops, laptops, smartphones) are the most commonly used"
    },
    {
      id: 32,
      question: "What is the main characteristic of von Neumann architecture?",
      options: ["Separate memory for data and instructions", "Single memory for data and instructions", "Multiple processors", "High speed"],
      correctAnswer: 1,
      explanation: "Von Neumann architecture uses a single memory for both data and instructions"
    },
    {
      id: 33,
      question: "Which architecture type offers faster execution?",
      options: ["Von Neumann", "Harvard", "Both are equal", "Depends on implementation"],
      correctAnswer: 1,
      explanation: "Harvard architecture offers faster execution due to separate memories and buses"
    },
    {
      id: 34,
      question: "What is the main disadvantage of von Neumann architecture?",
      options: ["High cost", "Memory bottleneck", "Low reliability", "Complex design"],
      correctAnswer: 1,
      explanation: "Von Neumann architecture suffers from memory bottleneck as data and instructions share the same bus"
    },
    {
      id: 35,
      question: "Which type of computer is used in embedded systems?",
      options: ["Mainframe", "Supercomputer", "Microcontroller", "Minicomputer"],
      correctAnswer: 2,
      explanation: "Microcontrollers, a type of microcomputer, are commonly used in embedded systems"
    },

    // CPU and Processor Questions (15 questions)
    {
      id: 36,
      question: "What does CPU stand for?",
      options: ["Computer Processing Unit", "Central Processing Unit", "Central Process Utility", "Computer Process Unit"],
      correctAnswer: 1,
      explanation: "CPU stands for Central Processing Unit, the brain of the computer"
    },
    {
      id: 37,
      question: "Which component of CPU performs arithmetic operations?",
      options: ["Control Unit", "ALU", "Registers", "Cache"],
      correctAnswer: 1,
      explanation: "ALU (Arithmetic Logic Unit) performs arithmetic and logical operations"
    },
    {
      id: 38,
      question: "What is the purpose of cache memory?",
      options: ["Permanent storage", "Temporary high-speed storage", "Error correction", "Instruction decoding"],
      correctAnswer: 1,
      explanation: "Cache memory provides temporary high-speed storage for frequently accessed data"
    },
    {
      id: 39,
      question: "Which register holds the address of the next instruction?",
      options: ["Accumulator", "Program Counter", "Stack Pointer", "Status Register"],
      correctAnswer: 1,
      explanation: "Program Counter (PC) holds the address of the next instruction to be executed"
    },
    {
      id: 40,
      question: "What does pipelining in CPU design achieve?",
      options: ["Increased clock speed", "Reduced power consumption", "Improved instruction throughput", "Better error detection"],
      correctAnswer: 2,
      explanation: "Pipelining allows overlapping of instruction execution phases, improving throughput"
    },
    {
      id: 41,
      question: "Which type of processor executes multiple instructions simultaneously?",
      options: ["Single-core", "Multi-core", "Scalar", "Reduced Instruction Set"],
      correctAnswer: 1,
      explanation: "Multi-core processors have multiple execution cores to execute multiple instructions simultaneously"
    },
    {
      id: 42,
      question: "What is the main characteristic of RISC architecture?",
      options: ["Complex instructions", "Fewer, simpler instructions", "Large cache", "High power consumption"],
      correctAnswer: 1,
      explanation: "RISC (Reduced Instruction Set Computing) uses fewer, simpler instructions"
    },
    {
      id: 43,
      question: "Which component decodes instructions in CPU?",
      options: ["ALU", "Control Unit", "Register", "Cache"],
      correctAnswer: 1,
      explanation: "Control Unit decodes instructions and coordinates CPU operations"
    },
    {
      id: 44,
      question: "What is the function of the accumulator register?",
      options: ["Store addresses", "Store intermediate results", "Count cycles", "Store status flags"],
      correctAnswer: 1,
      explanation: "Accumulator stores intermediate results during arithmetic and logical operations"
    },
    {
      id: 45,
      question: "Which type of memory has the fastest access time?",
      options: ["RAM", "ROM", "Cache", "Hard Disk"],
      correctAnswer: 2,
      explanation: "Cache memory has the fastest access time among all memory types"
    },
    {
      id: 46,
      question: "What does SIMD stand for in processor design?",
      options: ["Single Instruction Multiple Data", "Simple Instruction Multiple Data", "Sequential Instruction Multiple Data", "Standard Instruction Multiple Data"],
      correctAnswer: 0,
      explanation: "SIMD stands for Single Instruction Multiple Data, used for parallel processing"
    },
    {
      id: 47,
      question: "Which factor does NOT affect CPU performance?",
      options: ["Clock speed", "Number of cores", "Cache size", "Monitor resolution"],
      correctAnswer: 3,
      explanation: "Monitor resolution does not affect CPU performance, while the other factors do"
    },
    {
      id: 48,
      question: "What is the purpose of branch prediction in CPUs?",
      options: ["Increase cache size", "Reduce pipeline stalls", "Improve graphics", "Reduce power"],
      correctAnswer: 1,
      explanation: "Branch prediction reduces pipeline stalls by predicting branch outcomes"
    },
    {
      id: 49,
      question: "Which CPU scheduling algorithm provides fairness?",
      options: ["FCFS", "Priority", "Round Robin", "SJF"],
      correctAnswer: 2,
      explanation: "Round Robin provides fairness by giving each process equal time slices"
    },
    {
      id: 50,
      question: "What is hyperthreading?",
      options: ["Multiple processors", "Multiple cores", "Simulated multiple cores", "High-speed threading"],
      correctAnswer: 2,
      explanation: "Hyperthreading simulates multiple cores by allowing one physical core to handle multiple threads"
    },

    // Memory and Storage Questions (15 questions)
    {
      id: 51,
      question: "Which type of memory is volatile?",
      options: ["ROM", "PROM", "RAM", "EEPROM"],
      correctAnswer: 2,
      explanation: "RAM (Random Access Memory) is volatile and loses data when power is turned off"
    },
    {
      id: 52,
      question: "What does ROM stand for?",
      options: ["Random Output Memory", "Read Only Memory", "Rapid Operating Memory", "Remote Operating Memory"],
      correctAnswer: 1,
      explanation: "ROM stands for Read Only Memory, which is non-volatile"
    },
    {
      id: 53,
      question: "Which storage device has the fastest access time?",
      options: ["Hard Disk", "SSD", "Cache Memory", "RAM"],
      correctAnswer: 2,
      explanation: "Cache memory has the fastest access time, even faster than RAM"
    },
    {
      id: 54,
      question: "What is the capacity of a typical DVD?",
      options: ["650 MB", "4.7 GB", "25 GB", "100 GB"],
      correctAnswer: 1,
      explanation: "A single-layer DVD typically has 4.7 GB capacity"
    },
    {
      id: 55,
      question: "Which RAID level provides fault tolerance through mirroring?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
      correctAnswer: 1,
      explanation: "RAID 1 provides fault tolerance by mirroring data on two disks"
    },
    {
      id: 56,
      question: "What is the main advantage of SSD over HDD?",
      options: ["Lower cost", "Higher capacity", "Faster access", "Better durability"],
      correctAnswer: 2,
      explanation: "SSDs offer faster access times due to lack of mechanical parts"
    },
    {
      id: 57,
      question: "Which type of RAM is faster?",
      options: ["DRAM", "SRAM", "Both are same", "Depends on manufacturer"],
      correctAnswer: 1,
      explanation: "SRAM (Static RAM) is faster than DRAM (Dynamic RAM) but more expensive"
    },
    {
      id: 58,
      question: "What does virtual memory allow?",
      options: ["Faster processing", "Expansion of apparent memory", "More cache", "Better graphics"],
      correctAnswer: 1,
      explanation: "Virtual memory allows expansion of apparent memory beyond physical RAM"
    },
    {
      id: 59,
      question: "Which storage uses magnetic storage?",
      options: ["SSD", "Flash Drive", "Hard Disk Drive", "Optical Disk"],
      correctAnswer: 2,
      explanation: "HDD uses magnetic storage on spinning platters"
    },
    {
      id: 60,
      question: "What is the access time characteristic of sequential storage?",
      options: ["Constant", "Variable", "Instant", "Depends on location"],
      correctAnswer: 3,
      explanation: "Sequential storage access time depends on the location of data"
    },
    {
      id: 61,
      question: "Which memory technology is used in USB flash drives?",
      options: ["Magnetic", "Optical", "Flash", "Core"],
      correctAnswer: 2,
      explanation: "USB flash drives use flash memory technology"
    },
    {
      id: 62,
      question: "What is the main advantage of cloud storage?",
      options: ["Speed", "Accessibility", "Cost", "Security"],
      correctAnswer: 1,
      explanation: "Cloud storage provides accessibility from anywhere with internet connection"
    },
    {
      id: 63,
      question: "Which type of memory is used for CPU registers?",
      options: ["DRAM", "SRAM", "ROM", "Flash"],
      correctAnswer: 1,
      explanation: "CPU registers use SRAM for its high speed and stability"
    },
    {
      id: 64,
      question: "What is the typical access time for cache memory?",
      options: ["Milliseconds", "Microseconds", "Nanoseconds", "Picoseconds"],
      correctAnswer: 2,
      explanation: "Cache memory has nanosecond-level access times"
    },
    {
      id: 65,
      question: "Which storage medium is most durable?",
      options: ["Magnetic tape", "Optical disc", "SSD", "HDD"],
      correctAnswer: 0,
      explanation: "Magnetic tape is very durable for long-term archival storage"
    },

    // Bus and I/O Questions (10 questions)
    {
      id: 66,
      question: "What does the data bus carry?",
      options: ["Addresses", "Instructions", "Data", "Control signals"],
      correctAnswer: 2,
      explanation: "Data bus carries data between CPU, memory, and I/O devices"
    },
    {
      id: 67,
      question: "Which bus carries memory addresses?",
      options: ["Data bus", "Address bus", "Control bus", "Power bus"],
      correctAnswer: 1,
      explanation: "Address bus carries memory addresses from CPU to memory"
    },
    {
      id: 68,
      question: "What is the purpose of the control bus?",
      options: ["Transfer data", "Send addresses", "Coordinate operations", "Provide power"],
      correctAnswer: 2,
      explanation: "Control bus carries control signals to coordinate operations"
    },
    {
      id: 69,
      question: "Which I/O technique allows direct memory access?",
      options: ["Programmed I/O", "Interrupt-driven I/O", "DMA", "Polling"],
      correctAnswer: 2,
      explanation: "DMA (Direct Memory Access) allows devices to access memory directly"
    },
    {
      id: 70,
      question: "What is bus width measured in?",
      options: ["Bytes", "Bits", "Words", "Characters"],
      correctAnswer: 1,
      explanation: "Bus width is measured in bits (e.g., 32-bit, 64-bit bus)"
    },
    {
      id: 71,
      question: "Which bus connects CPU to memory?",
      options: ["System bus", "Local bus", "Front-side bus", "Back-side bus"],
      correctAnswer: 2,
      explanation: "Front-side bus connects CPU to memory and northbridge"
    },
    {
      id: 72,
      question: "What does USB stand for?",
      options: ["Universal Serial Bus", "Unified System Bus", "Universal System Bus", "Unified Serial Bus"],
      correctAnswer: 0,
      explanation: "USB stands for Universal Serial Bus"
    },
    {
      id: 73,
      question: "Which I/O method gives CPU control to the I/O device?",
      options: ["Polling", "Interrupt", "DMA", "All of these"],
      correctAnswer: 2,
      explanation: "DMA gives direct memory access control to I/O devices"
    },
    {
      id: 74,
      question: "What is the main advantage of serial buses over parallel buses?",
      options: ["Higher speed", "Longer distance", "Lower cost", "More pins"],
      correctAnswer: 1,
      explanation: "Serial buses can transmit over longer distances with less interference"
    },
    {
      id: 75,
      question: "Which protocol is used for connecting hard drives?",
      options: ["USB", "PCI", "SATA", "FireWire"],
      correctAnswer: 2,
      explanation: "SATA (Serial ATA) is the standard protocol for connecting hard drives"
    },

    // Advanced Topics Questions (25 questions)
    {
      id: 76,
      question: "What is the principle behind pipelining?",
      options: ["Executing one instruction at a time", "Overlapping instruction execution", "Increasing clock frequency", "Reducing instruction count"],
      correctAnswer: 1,
      explanation: "Pipelining overlaps the execution of multiple instructions to improve throughput"
    },
    {
      id: 77,
      question: "Which cache replacement algorithm is most effective?",
      options: ["FIFO", "LRU", "Random", "Optimal"],
      correctAnswer: 1,
      explanation: "LRU (Least Recently Used) is generally most effective in practice"
    },
    {
      id: 78,
      question: "What does superscalar architecture allow?",
      options: ["Single instruction execution", "Multiple instructions per cycle", "Larger cache", "More cores"],
      correctAnswer: 1,
      explanation: "Superscalar allows execution of multiple instructions per clock cycle"
    },
    {
      id: 79,
      question: "What is branch prediction used for?",
      options: ["Increasing memory", "Improving cache", "Reducing pipeline stalls", "Better graphics"],
      correctAnswer: 2,
      explanation: "Branch prediction reduces pipeline stalls caused by conditional branches"
    },
    {
      id: 80,
      question: "Which is a characteristic of Harvard architecture?",
      options: ["Shared memory", "Separate data and instruction memory", "Lower cost", "Less complex"],
      correctAnswer: 1,
      explanation: "Harvard architecture has separate memory and buses for data and instructions"
    },
    {
      id: 81,
      question: "What does Flynn's taxonomy classify?",
      options: ["Memory types", "Processor architectures", "Instruction sets", "Operating systems"],
      correctAnswer: 1,
      explanation: "Flynn's taxonomy classifies computer architectures by instruction and data streams"
    },
    {
      id: 82,
      question: "What is the purpose of TLB?",
      options: ["Memory protection", "Address translation cache", "Instruction cache", "Data buffer"],
      correctAnswer: 1,
      explanation: "TLB (Translation Lookaside Buffer) caches page table entries for faster address translation"
    },
    {
      id: 83,
      question: "Which is NOT a level of cache memory?",
      options: ["L1", "L2", "L3", "L4"],
      correctAnswer: 3,
      explanation: "Common cache levels are L1, L2, and L3; L4 is not standard terminology"
    },
    {
      id: 84,
      question: "What does SIMD stand for?",
      options: ["Single Instruction Multiple Data", "Simple Instruction Multiple Data", "Sequential Instruction Multiple Data", "Standard Instruction Multiple Data"],
      correctAnswer: 0,
      explanation: "SIMD stands for Single Instruction Multiple Data"
    },
    {
      id: 85,
      question: "What is the main goal of computer architecture design?",
      options: ["Lowest cost", "Highest performance", "Best performance-cost ratio", "Smallest size"],
      correctAnswer: 2,
      explanation: "Computer architecture aims for the best performance-cost ratio"
    },
    {
      id: 86,
      question: "Which is an example of MIMD architecture?",
      options: ["Vector processor", "Array processor", "Multiprocessor", "Pipeline processor"],
      correctAnswer: 2,
      explanation: "Multiprocessor systems execute Multiple Instructions on Multiple Data"
    },
    {
      id: 87,
      question: "What is the purpose of virtual memory?",
      options: ["Increase physical memory", "Expand apparent memory", "Improve cache", "Reduce power"],
      correctAnswer: 1,
      explanation: "Virtual memory expands apparent memory beyond physical RAM"
    },
    {
      id: 88,
      question: "Which cache mapping technique is most flexible?",
      options: ["Direct mapping", "Fully associative", "Set associative", "All are equal"],
      correctAnswer: 2,
      explanation: "Set associative mapping provides a good balance of flexibility and complexity"
    },
    {
      id: 89,
      question: "What does VLIW stand for?",
      options: ["Very Long Instruction Word", "Variable Length Instruction Word", "Virtual Long Instruction Word", "Very Large Instruction Word"],
      correctAnswer: 0,
      explanation: "VLIW stands for Very Long Instruction Word architecture"
    },
    {
      id: 90,
      question: "Which is a characteristic of RISC processors?",
      options: ["Complex instructions", "Many addressing modes", "Simple instructions", "Microcode intensive"],
      correctAnswer: 2,
      explanation: "RISC processors use simple, fixed-length instructions"
    },
    {
      id: 91,
      question: "What is the purpose of branch target buffer?",
      options: ["Store data", "Predict branch targets", "Cache instructions", "Manage memory"],
      correctAnswer: 1,
      explanation: "Branch target buffer predicts the target address of branch instructions"
    },
    {
      id: 92,
      question: "Which memory type is fastest?",
      options: ["Registers", "Cache", "RAM", "SSD"],
      correctAnswer: 0,
      explanation: "Registers are the fastest memory type, located inside the CPU"
    },
    {
      id: 93,
      question: "What does MESI protocol handle?",
      options: ["Memory allocation", "Cache coherency", "Process scheduling", "I/O operations"],
      correctAnswer: 1,
      explanation: "MESI protocol maintains cache coherency in multiprocessor systems"
    },
    {
      id: 94,
      question: "What is the main advantage of NUMA?",
      options: ["Lower cost", "Better scalability", "Uniform memory access", "Simple design"],
      correctAnswer: 1,
      explanation: "NUMA (Non-Uniform Memory Access) provides better scalability for multiprocessor systems"
    },
    {
      id: 95,
      question: "Which is NOT a characteristic of CISC architecture?",
      options: ["Complex instructions", "Multiple addressing modes", "Microcode control", "Simple instructions"],
      correctAnswer: 3,
      explanation: "CISC uses complex instructions, not simple ones (that's RISC)"
    },
    {
      id: 96,
      question: "What does speculative execution do?",
      options: ["Reduces memory", "Executes likely branches early", "Increases cache", "Reduces power"],
      correctAnswer: 1,
      explanation: "Speculative execution executes instructions before confirming they are needed"
    },
    {
      id: 97,
      question: "Which is a feature of out-of-order execution?",
      options: ["Sequential instruction execution", "Execution regardless of data dependencies", "Fixed execution order", "No optimization"],
      correctAnswer: 1,
      explanation: "Out-of-order execution executes instructions when operands are available, regardless of program order"
    },
    {
      id: 98,
      question: "What is the purpose of a reorder buffer?",
      options: ["Store data", "Maintain program order", "Cache instructions", "Manage interrupts"],
      correctAnswer: 1,
      explanation: "Reorder buffer maintains program order for correct results in out-of-order execution"
    },
    {
      id: 99,
      question: "Which technique is used to increase ILP?",
      options: ["Memory hierarchy", "Instruction Level Parallelism", "Process synchronization", "Data compression"],
      correctAnswer: 1,
      explanation: "ILP (Instruction Level Parallelism) techniques increase parallel execution of instructions"
    },
    {
      id: 100,
      question: "What is the final goal of computer architecture optimization?",
      options: ["Maximum speed", "Minimum power", "Best performance per watt", "Maximum features"],
      correctAnswer: 2,
      explanation: "Modern computer architecture focuses on best performance per watt for efficiency"
    }
  ],
  onComplete: (results) => {
    console.log('Computer Architecture quiz completed with results:', results);
  }
};
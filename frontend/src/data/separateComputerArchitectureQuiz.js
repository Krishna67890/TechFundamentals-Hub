export const separateComputerArchitectureQuiz = {
  title: "Computer Architecture Mastery Quiz",
  topicId: "computer-architecture-mastery",
  timeLimit: 7200, // 2 hours in seconds
  questions: [
    // Number Systems Questions (25 questions)
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
    {
      id: 21,
      question: "What is the 2's complement representation of -5 in 8-bit binary?",
      options: ["11111011", "10000101", "11111101", "11111010"],
      correctAnswer: 0,
      explanation: "5 = 00000101, 1's complement = 11111010, 2's complement = 11111011"
    },
    {
      id: 22,
      question: "Which number representation handles both positive and negative numbers?",
      options: ["Unsigned binary", "Signed magnitude", "BCD", "Octal"],
      correctAnswer: 1,
      explanation: "Signed magnitude representation can handle both positive and negative numbers"
    },
    {
      id: 23,
      question: "What is the decimal value of binary 11011?",
      options: ["25", "27", "29", "31"],
      correctAnswer: 1,
      explanation: "11011₂ = 1×2⁴ + 1×2³ + 0×2² + 1×2¹ + 1×2⁰ = 16 + 8 + 0 + 2 + 1 = 27"
    },
    {
      id: 24,
      question: "In hexadecimal, what does 'A' represent?",
      options: ["8", "9", "10", "11"],
      correctAnswer: 2,
      explanation: "In hexadecimal, A represents decimal 10"
    },
    {
      id: 25,
      question: "What is the main advantage of 2's complement representation?",
      options: ["Simpler arithmetic", "No negative zero", "Easier conversion", "All of the above"],
      correctAnswer: 3,
      explanation: "2's complement has all these advantages: simpler arithmetic, no negative zero, and easier conversion"
    },

    // Computer Types Questions (20 questions)
    {
      id: 26,
      question: "Which type of computer is designed for individual use?",
      options: ["Mainframe", "Supercomputer", "Microcomputer", "Minicomputer"],
      correctAnswer: 2,
      explanation: "Microcomputers are designed for individual use, like personal computers"
    },
    {
      id: 27,
      question: "What is the primary characteristic of a mainframe computer?",
      options: ["Portability", "High reliability and large-scale processing", "Low cost", "Single user focus"],
      correctAnswer: 1,
      explanation: "Mainframes are characterized by high reliability and ability to handle large-scale processing"
    },
    {
      id: 28,
      question: "Which computer type is used for weather forecasting and scientific research?",
      options: ["Microcomputer", "Minicomputer", "Mainframe", "Supercomputer"],
      correctAnswer: 3,
      explanation: "Supercomputers are used for complex calculations like weather forecasting and scientific research"
    },
    {
      id: 29,
      question: "What does FLOPS measure in supercomputers?",
      options: ["Storage capacity", "Memory size", "Processing speed", "Power consumption"],
      correctAnswer: 2,
      explanation: "FLOPS (Floating Point Operations Per Second) measures processing speed of supercomputers"
    },
    {
      id: 30,
      question: "Which computer type typically serves multiple users simultaneously?",
      options: ["Microcomputer", "Workstation", "Laptop", "Mainframe"],
      correctAnswer: 3,
      explanation: "Mainframes are designed to serve hundreds or thousands of users simultaneously"
    },
    {
      id: 31,
      question: "What is the typical use case for minicomputers?",
      options: ["Personal use", "Small organizations and labs", "Massive data processing", "Scientific research"],
      correctAnswer: 1,
      explanation: "Minicomputers are used in small organizations, labs, and as servers"
    },
    {
      id: 32,
      question: "Which computer type has the highest processing power?",
      options: ["Mainframe", "Supercomputer", "Minicomputer", "Microcomputer"],
      correctAnswer: 1,
      explanation: "Supercomputers have the highest processing power among all computer types"
    },
    {
      id: 33,
      question: "What is the main advantage of microcomputers?",
      options: ["High processing power", "Low cost", "Multi-user capability", "High reliability"],
      correctAnswer: 1,
      explanation: "The main advantage of microcomputers is their low cost and personal usability"
    },
    {
      id: 34,
      question: "Which computer type is commonly used in banks for transaction processing?",
      options: ["Supercomputer", "Microcomputer", "Mainframe", "Minicomputer"],
      correctAnswer: 2,
      explanation: "Mainframes are commonly used in banks for secure, reliable transaction processing"
    },
    {
      id: 35,
      question: "What is the primary limitation of supercomputers?",
      options: ["Portability", "High cost", "Low processing power", "Limited software"],
      correctAnswer: 1,
      explanation: "Supercomputers have extremely high costs, which is their primary limitation"
    },
    {
      id: 36,
      question: "Which computer type is most commonly used today?",
      options: ["Mainframe", "Supercomputer", "Minicomputer", "Microcomputer"],
      correctAnswer: 3,
      explanation: "Microcomputers (desktops, laptops, smartphones) are the most commonly used"
    },
    {
      id: 37,
      question: "What is the main characteristic of von Neumann architecture?",
      options: ["Separate memory for data and instructions", "Single memory for data and instructions", "Multiple processors", "High speed"],
      correctAnswer: 1,
      explanation: "Von Neumann architecture uses a single memory for both data and instructions"
    },
    {
      id: 38,
      question: "Which architecture type offers faster execution?",
      options: ["Von Neumann", "Harvard", "Both are equal", "Depends on implementation"],
      correctAnswer: 1,
      explanation: "Harvard architecture offers faster execution due to separate memories and buses"
    },
    {
      id: 39,
      question: "What is the main disadvantage of von Neumann architecture?",
      options: ["High cost", "Memory bottleneck", "Low reliability", "Complex design"],
      correctAnswer: 1,
      explanation: "Von Neumann architecture suffers from memory bottleneck as data and instructions share the same bus"
    },
    {
      id: 40,
      question: "Which type of computer is used in embedded systems?",
      options: ["Mainframe", "Supercomputer", "Microcontroller", "Minicomputer"],
      correctAnswer: 2,
      explanation: "Microcontrollers, a type of microcomputer, are commonly used in embedded systems"
    },
    {
      id: 41,
      question: "What is the primary use of workstations?",
      options: ["Gaming", "Scientific computing", "Office work", "Entertainment"],
      correctAnswer: 1,
      explanation: "Workstations are primarily used for scientific computing, engineering, and professional applications"
    },
    {
      id: 42,
      question: "Which computer type is designed for real-time processing?",
      options: ["Mainframe", "Supercomputer", "Embedded system", "Minicomputer"],
      correctAnswer: 2,
      explanation: "Embedded systems are designed for real-time processing in specific applications"
    },
    {
      id: 43,
      question: "What is the main difference between servers and workstations?",
      options: ["Processing power", "Operating system", "Intended use", "Cost"],
      correctAnswer: 2,
      explanation: "The main difference is intended use: servers serve resources, workstations are for individual use"
    },
    {
      id: 44,
      question: "Which computer type is optimized for graphics processing?",
      options: ["Mainframe", "Workstation", "Microcomputer", "Minicomputer"],
      correctAnswer: 1,
      explanation: "Workstations are optimized for graphics processing and professional applications"
    },
    {
      id: 45,
      question: "What is the main advantage of clustered computing?",
      options: ["High availability", "Low cost", "Simple management", "Single point of failure"],
      correctAnswer: 0,
      explanation: "Clustered computing provides high availability through redundancy and load distribution"
    },

    // CPU and Processor Questions (20 questions)
    {
      id: 46,
      question: "What does CPU stand for?",
      options: ["Computer Processing Unit", "Central Processing Unit", "Central Process Utility", "Computer Process Unit"],
      correctAnswer: 1,
      explanation: "CPU stands for Central Processing Unit, the brain of the computer"
    },
    {
      id: 47,
      question: "Which component of CPU performs arithmetic operations?",
      options: ["Control Unit", "ALU", "Registers", "Cache"],
      correctAnswer: 1,
      explanation: "ALU (Arithmetic Logic Unit) performs arithmetic and logical operations"
    },
    {
      id: 48,
      question: "What is the purpose of cache memory?",
      options: ["Permanent storage", "Temporary high-speed storage", "Error correction", "Instruction decoding"],
      correctAnswer: 1,
      explanation: "Cache memory provides temporary high-speed storage for frequently accessed data"
    },
    {
      id: 49,
      question: "Which register holds the address of the next instruction?",
      options: ["Accumulator", "Program Counter", "Stack Pointer", "Status Register"],
      correctAnswer: 1,
      explanation: "Program Counter (PC) holds the address of the next instruction to be executed"
    },
    {
      id: 50,
      question: "What does pipelining in CPU design achieve?",
      options: ["Increased clock speed", "Reduced power consumption", "Improved instruction throughput", "Better error detection"],
      correctAnswer: 2,
      explanation: "Pipelining allows overlapping of instruction execution phases, improving throughput"
    },
    {
      id: 51,
      question: "Which type of processor executes multiple instructions simultaneously?",
      options: ["Single-core", "Multi-core", "Scalar", "Reduced Instruction Set"],
      correctAnswer: 1,
      explanation: "Multi-core processors have multiple execution cores to execute multiple instructions simultaneously"
    },
    {
      id: 52,
      question: "What is the main characteristic of RISC architecture?",
      options: ["Complex instructions", "Fewer, simpler instructions", "Large cache", "High power consumption"],
      correctAnswer: 1,
      explanation: "RISC (Reduced Instruction Set Computing) uses fewer, simpler instructions"
    },
    {
      id: 53,
      question: "Which component decodes instructions in CPU?",
      options: ["ALU", "Control Unit", "Register", "Cache"],
      correctAnswer: 1,
      explanation: "Control Unit decodes instructions and coordinates CPU operations"
    },
    {
      id: 54,
      question: "What is the function of the accumulator register?",
      options: ["Store addresses", "Store intermediate results", "Count cycles", "Store status flags"],
      correctAnswer: 1,
      explanation: "Accumulator stores intermediate results during arithmetic and logical operations"
    },
    {
      id: 55,
      question: "Which type of memory has the fastest access time?",
      options: ["RAM", "ROM", "Cache", "Hard Disk"],
      correctAnswer: 2,
      explanation: "Cache memory has the fastest access time among all memory types"
    },
    {
      id: 56,
      question: "What does SIMD stand for in processor design?",
      options: ["Single Instruction Multiple Data", "Simple Instruction Multiple Data", "Sequential Instruction Multiple Data", "Standard Instruction Multiple Data"],
      correctAnswer: 0,
      explanation: "SIMD stands for Single Instruction Multiple Data, used for parallel processing"
    },
    {
      id: 57,
      question: "Which factor does NOT affect CPU performance?",
      options: ["Clock speed", "Number of cores", "Cache size", "Monitor resolution"],
      correctAnswer: 3,
      explanation: "Monitor resolution does not affect CPU performance, while the other factors do"
    },
    {
      id: 58,
      question: "What is the purpose of branch prediction in CPUs?",
      options: ["Increase cache size", "Reduce pipeline stalls", "Improve graphics", "Reduce power"],
      correctAnswer: 1,
      explanation: "Branch prediction reduces pipeline stalls by predicting branch outcomes"
    },
    {
      id: 59,
      question: "Which CPU scheduling algorithm provides fairness?",
      options: ["FCFS", "Priority", "Round Robin", "SJF"],
      correctAnswer: 2,
      explanation: "Round Robin provides fairness by giving each process equal time slices"
    },
    {
      id: 60,
      question: "What is hyperthreading?",
      options: ["Multiple processors", "Multiple cores", "Simulated multiple cores", "High-speed threading"],
      correctAnswer: 2,
      explanation: "Hyperthreading simulates multiple cores by allowing one physical core to handle multiple threads"
    },
    {
      id: 61,
      question: "What is the main advantage of superscalar processors?",
      options: ["Lower power consumption", "Multiple instruction execution per cycle", "Simpler design", "Less heat generation"],
      correctAnswer: 1,
      explanation: "Superscalar processors can execute multiple instructions per clock cycle"
    },
    {
      id: 62,
      question: "Which component handles interrupt processing?",
      options: ["ALU", "Control Unit", "Cache", "Registers"],
      correctAnswer: 1,
      explanation: "The Control Unit handles interrupt processing and coordination"
    },
    {
      id: 63,
      question: "What is the purpose of instruction prefetching?",
      options: ["Increase memory", "Reduce pipeline bubbles", "Improve cache", "Decrease power"],
      correctAnswer: 1,
      explanation: "Instruction prefetching reduces pipeline bubbles by fetching instructions before they're needed"
    },
    {
      id: 64,
      question: "Which register stores the result of arithmetic operations?",
      options: ["Program Counter", "Accumulator", "Stack Pointer", "Status Register"],
      correctAnswer: 1,
      explanation: "The Accumulator register typically stores results of arithmetic operations"
    },
    {
      id: 65,
      question: "What is the main benefit of out-of-order execution?",
      options: ["Sequential processing", "Better resource utilization", "Simpler design", "Lower power"],
      correctAnswer: 1,
      explanation: "Out-of-order execution improves resource utilization by executing instructions when operands are available"
    },

    // Memory and Storage Questions (20 questions)
    {
      id: 66,
      question: "Which type of memory is volatile?",
      options: ["ROM", "PROM", "RAM", "EEPROM"],
      correctAnswer: 2,
      explanation: "RAM (Random Access Memory) is volatile and loses data when power is turned off"
    },
    {
      id: 67,
      question: "What does ROM stand for?",
      options: ["Random Output Memory", "Read Only Memory", "Rapid Operating Memory", "Remote Operating Memory"],
      correctAnswer: 1,
      explanation: "ROM stands for Read Only Memory, which is non-volatile"
    },
    {
      id: 68,
      question: "Which storage device has the fastest access time?",
      options: ["Hard Disk", "SSD", "Cache Memory", "RAM"],
      correctAnswer: 2,
      explanation: "Cache memory has the fastest access time, even faster than RAM"
    },
    {
      id: 69,
      question: "What is the capacity of a typical DVD?",
      options: ["650 MB", "4.7 GB", "25 GB", "100 GB"],
      correctAnswer: 1,
      explanation: "A single-layer DVD typically has 4.7 GB capacity"
    },
    {
      id: 70,
      question: "Which RAID level provides fault tolerance through mirroring?",
      options: ["RAID 0", "RAID 1", "RAID 5", "RAID 10"],
      correctAnswer: 1,
      explanation: "RAID 1 provides fault tolerance by mirroring data on two disks"
    },
    {
      id: 71,
      question: "What is the main advantage of SSD over HDD?",
      options: ["Lower cost", "Higher capacity", "Faster access", "Better durability"],
      correctAnswer: 2,
      explanation: "SSDs offer faster access times due to lack of mechanical parts"
    },
    {
      id: 72,
      question: "Which type of RAM is faster?",
      options: ["DRAM", "SRAM", "Both are same", "Depends on manufacturer"],
      correctAnswer: 1,
      explanation: "SRAM (Static RAM) is faster than DRAM (Dynamic RAM) but more expensive"
    },
    {
      id: 73,
      question: "What does virtual memory allow?",
      options: ["Faster processing", "Expansion of apparent memory", "More cache", "Better graphics"],
      correctAnswer: 1,
      explanation: "Virtual memory allows expansion of apparent memory beyond physical RAM"
    },
    {
      id: 74,
      question: "Which storage uses magnetic storage?",
      options: ["SSD", "Flash Drive", "Hard Disk Drive", "Optical Disk"],
      correctAnswer: 2,
      explanation: "HDD uses magnetic storage on spinning platters"
    },
    {
      id: 75,
      question: "What is the access time characteristic of sequential storage?",
      options: ["Constant", "Variable", "Instant", "Depends on location"],
      correctAnswer: 3,
      explanation: "Sequential storage access time depends on the location of data"
    },
    {
      id: 76,
      question: "Which memory technology is used in USB flash drives?",
      options: ["Magnetic", "Optical", "Flash", "Core"],
      correctAnswer: 2,
      explanation: "USB flash drives use flash memory technology"
    },
    {
      id: 77,
      question: "What is the main advantage of cloud storage?",
      options: ["Speed", "Accessibility", "Cost", "Security"],
      correctAnswer: 1,
      explanation: "Cloud storage provides accessibility from anywhere with internet connection"
    },
    {
      id: 78,
      question: "Which type of memory is used for CPU registers?",
      options: ["DRAM", "SRAM", "ROM", "Flash"],
      correctAnswer: 1,
      explanation: "CPU registers use SRAM for its high speed and stability"
    },
    {
      id: 79,
      question: "What is the typical access time for cache memory?",
      options: ["Milliseconds", "Microseconds", "Nanoseconds", "Picoseconds"],
      correctAnswer: 2,
      explanation: "Cache memory has nanosecond-level access times"
    },
    {
      id: 80,
      question: "Which storage medium is most durable?",
      options: ["Magnetic tape", "Optical disc", "SSD", "HDD"],
      correctAnswer: 0,
      explanation: "Magnetic tape is very durable for long-term archival storage"
    },
    {
      id: 81,
      question: "What is the main disadvantage of magnetic storage?",
      options: ["High cost", "Mechanical failure", "Low capacity", "Slow access"],
      correctAnswer: 1,
      explanation: "Magnetic storage has mechanical parts that can fail, unlike solid-state storage"
    },
    {
      id: 82,
      question: "Which memory type requires periodic refreshing?",
      options: ["SRAM", "DRAM", "ROM", "Flash"],
      correctAnswer: 1,
      explanation: "DRAM requires periodic refreshing to maintain data, unlike SRAM"
    },
    {
      id: 83,
      question: "What is the purpose of memory hierarchy?",
      options: ["Reduce cost", "Optimize performance", "Increase capacity", "Improve reliability"],
      correctAnswer: 1,
      explanation: "Memory hierarchy optimizes performance by using different memory types at different levels"
    },
    {
      id: 84,
      question: "Which storage technology offers the highest capacity?",
      options: ["SSD", "HDD", "Optical disc", "Magnetic tape"],
      correctAnswer: 3,
      explanation: "Magnetic tape can offer the highest storage capacity for archival purposes"
    },
    {
      id: 85,
      question: "What is the main advantage of solid-state storage?",
      options: ["Lower cost", "Higher speed", "Better durability", "All of the above"],
      correctAnswer: 1,
      explanation: "Solid-state storage offers higher speed due to lack of mechanical parts"
    },

    // Bus and I/O Questions (15 questions)
    {
      id: 86,
      question: "What does the data bus carry?",
      options: ["Addresses", "Instructions", "Data", "Control signals"],
      correctAnswer: 2,
      explanation: "Data bus carries data between CPU, memory, and I/O devices"
    },
    {
      id: 87,
      question: "Which bus carries memory addresses?",
      options: ["Data bus", "Address bus", "Control bus", "Power bus"],
      correctAnswer: 1,
      explanation: "Address bus carries memory addresses from CPU to memory"
    },
    {
      id: 88,
      question: "What is the purpose of the control bus?",
      options: ["Transfer data", "Send addresses", "Coordinate operations", "Provide power"],
      correctAnswer: 2,
      explanation: "Control bus carries control signals to coordinate operations"
    },
    {
      id: 89,
      question: "Which I/O technique allows direct memory access?",
      options: ["Programmed I/O", "Interrupt-driven I/O", "DMA", "Polling"],
      correctAnswer: 2,
      explanation: "DMA (Direct Memory Access) allows devices to access memory directly"
    },
    {
      id: 90,
      question: "What is bus width measured in?",
      options: ["Bytes", "Bits", "Words", "Characters"],
      correctAnswer: 1,
      explanation: "Bus width is measured in bits (e.g., 32-bit, 64-bit bus)"
    },
    {
      id: 91,
      question: "Which bus connects CPU to memory?",
      options: ["System bus", "Local bus", "Front-side bus", "Back-side bus"],
      correctAnswer: 2,
      explanation: "Front-side bus connects CPU to memory and northbridge"
    },
    {
      id: 92,
      question: "What does USB stand for?",
      options: ["Universal Serial Bus", "Unified System Bus", "Universal System Bus", "Unified Serial Bus"],
      correctAnswer: 0,
      explanation: "USB stands for Universal Serial Bus"
    },
    {
      id: 93,
      question: "Which I/O method gives CPU control to the I/O device?",
      options: ["Polling", "Interrupt", "DMA", "All of these"],
      correctAnswer: 2,
      explanation: "DMA gives direct memory access control to I/O devices"
    },
    {
      id: 94,
      question: "What is the main advantage of serial buses over parallel buses?",
      options: ["Higher speed", "Longer distance", "Lower cost", "More pins"],
      correctAnswer: 1,
      explanation: "Serial buses can transmit over longer distances with less interference"
    },
    {
      id: 95,
      question: "Which protocol is used for connecting hard drives?",
      options: ["USB", "PCI", "SATA", "FireWire"],
      correctAnswer: 2,
      explanation: "SATA (Serial ATA) is the standard protocol for connecting hard drives"
    },
    {
      id: 96,
      question: "What is the purpose of bus arbitration?",
      options: ["Increase speed", "Manage bus access", "Reduce power", "Improve reliability"],
      correctAnswer: 1,
      explanation: "Bus arbitration manages which device gets access to the bus at any given time"
    },
    {
      id: 97,
      question: "Which I/O technique is most efficient for large data transfers?",
      options: ["Programmed I/O", "Interrupt-driven I/O", "DMA", "Polling"],
      correctAnswer: 2,
      explanation: "DMA is most efficient for large data transfers as it doesn't require CPU intervention"
    },
    {
      id: 98,
      question: "What does PCIe stand for?",
      options: ["Parallel Computer Express Interface", "Peripheral Component Express Interface", "Parallel Component Express Interface", "Peripheral Computer Express Interface"],
      correctAnswer: 1,
      explanation: "PCIe stands for Peripheral Component Interconnect Express"
    },
    {
      id: 99,
      question: "Which bus standard is commonly used for graphics cards?",
      options: ["USB", "SATA", "PCIe", "Ethernet"],
      correctAnswer: 2,
      explanation: "PCIe (PCI Express) is commonly used for graphics cards and high-speed peripherals"
    },
    {
      id: 100,
      question: "What is the main advantage of plug-and-play systems?",
      options: ["Lower cost", "Automatic configuration", "Better performance", "Higher reliability"],
      correctAnswer: 1,
      explanation: "Plug-and-play systems automatically configure hardware without manual intervention"
    }
  ]
};
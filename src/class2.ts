interface Person {
  name: string;
  say(message: string): void;
}

interface Programmer {
  writeCode(requirment: string): string;
}

abstract class Korean implements Person {
  public abstract jumin: number;
  constructor(public name: string) {}

  say(msg: string) {
    console.log(msg);
  }

  abstract loveKimchi(): void;
}

class KoreanProgrammer extends Korean implements Programmer {
  constructor(public name: string, public jumin: number) {
    super(name);
  }

  writeCode(requirment: string): string {
    console.log(requirment);
    return requirment + ".....";
  }

  say(message: string): void {
    console.log(message);
  }

  loveKimchi() {
    console.log("hi");
  }
}

const jay = new KoreanProgrammer("jay", 222);

interface IHashTable {
  get(key: string): unknown;
  set(key: string, value: unknown): void;
  remove(key: string): boolean;
}

class HashTable implements IHashTable {
  private table: (Array<unknown> | undefined)[];
  public size: number;

  constructor(size: number) {
    this.table = new Array(size);
    this.size = 0;
  }

  private hash(key: string): number {
    let total = 0;

    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }

    return total % this.table.length;
  }

  public get(key: string): unknown {
    const index = this.hash(key);

    return this.table[index]?.[1] ?? null;
  }

  public set(key: string, value: unknown) {
    const index = this.hash(key);

    this.table[index] = [key, value];
    this.size++;
  }

  public remove(key: string) {
    const index = this.hash(key);
  
    if (this.table[index]?.length) {
      this.table[index] = undefined;
      this.size--;

      return true;
    }

    return false;
  }
}

export default HashTable;

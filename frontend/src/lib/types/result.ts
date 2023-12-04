
export class Result<T, E extends Error> {
  #ok: T | null = null;
  #err: E | null = null;

  constructor(ok: T | null, err: E | null) {
    if (!ok && !err) throw new Error("Result must have a value or an error");
    if (ok !== null) {
      this.#ok = ok;
    } else {
      this.#err = err as E;
    }
  }

  getErr(): this extends Result<never, E> ? E : E | null {
    return this.#err as E;
  }


  isOk(): this is Result<T, never> {
    return this.#ok !== null;
  }

  isErr(): this is Result<never, E> {
    return this.#err !== null;
  }

  unwrap(): T {
    if (this.isOk()) {
      return this.#ok as T;
    }

    if (this.isErr()) {
      throw this.#err as E;
    }
    
    throw new Error("Unknown error");
  }

  unwrapOr(fallback: T): T {
    if (this.isOk()) {
      return this.#ok as T;
    }

    if (this.isErr()) {
      return fallback;
    }
    
    throw new Error("Unknown error");
  }

  expect(msg: string): T {
    if (this.isOk()) {
      return this.#ok as T;
    }

    if (this.isErr()) {
      const err = this.#err as E;
      throw (err.message = msg + ":\n " + err.message);
    } 
      
    throw new Error(msg);
  }
}

export async function littleFetch(
  input: RequestInfo | URL,
  init?: RequestInit | undefined
): Promise<Result<Response, Error>> {
  try {
    const response = await fetch(input, init);
    return new Result<Response, Error>(response, null);
  } catch (error: unknown) {
    if (error instanceof Error) {
      return new Result<Response, Error>(null, error);
    }
    return new Result<Response, Error>(null, new Error("Unknown error"));
  }
}

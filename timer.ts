export class Timer {
  private startTime: number;
  private endTime: number;
  
  /**
   * Timer constructor.
   */
  constructor () {
     this.startTime = (new Date).getTime();
     this.endTime = this.startTime;
  }

  /**
   * Timer start.
   */
  start(): void {
     this.startTime = (new Date).getTime();
  }

  /**
   * Timer end.
   */
  end(): void {
     this.endTime = (new Date).getTime();
  }

  /**
   * Timer elapsed time.
   * 
   * @returns
   */
  elapsedTime(): number {
    return (this.endTime - this.startTime);
  }

}
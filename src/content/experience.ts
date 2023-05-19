export class Experience {
  public readonly company: string;
  public readonly position: string;
  public readonly startDate: string;
  public readonly endDate: string;
  public readonly responsibilities: Array<string>;
  public readonly technologies: Array<string>;

  constructor(props: {
    company: string;
    position: string;
    startDate: string;
    endDate: string;
    responsibilities: Array<string>;
    technologies: Array<string>;
  }) {
    this.company = props.company;
    this.position = props.position;
    this.startDate = props.startDate;
    this.endDate = props.endDate;
    this.responsibilities = props.responsibilities;
    this.technologies = props.technologies;
  }
}

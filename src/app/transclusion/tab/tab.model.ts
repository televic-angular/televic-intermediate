export class Tab {
  name: string;
  content: string;
  active?: boolean;

  constructor(name: string, content: string, active = false) {}
}

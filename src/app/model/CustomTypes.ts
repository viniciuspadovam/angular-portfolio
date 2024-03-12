export type navActiveOpt = 'about' | 'experience' | 'projects';

export interface ILink {
  link: string;
  experiencePeriod?: string;
  title: string;
  hirer?: string;
  subTitle?: string;
  description: string;
  tags: string[]
}

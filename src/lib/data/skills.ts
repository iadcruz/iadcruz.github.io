import Assets from './assets';
import type { Skill, SkillCategory } from '../types';
import svelte from '../md/svelte.md?raw';
import { omit, type StringWithAutoComplete } from '@riadh-adrani/utils';

const defineSkillCategory = <S extends string>(data: SkillCategory<S>): SkillCategory<S> => data;

const categories = [
  defineSkillCategory({ name: 'Programming Languages', slug: 'pro-lang' }),
  defineSkillCategory({ name: 'Frameworks', slug: 'framework' }),
  defineSkillCategory({ name: 'Libraries', slug: 'library' }),
  defineSkillCategory({ name: 'Langauges', slug: 'lang' }),
  defineSkillCategory({ name: 'Databases', slug: 'db' }),
  defineSkillCategory({ name: 'ORMs', slug: 'orm' }),
  defineSkillCategory({ name: 'DevOps', slug: 'devops' }),
  defineSkillCategory({ name: 'Testing', slug: 'test' }),
  defineSkillCategory({ name: 'Dev Tools', slug: 'devtools' }),
  defineSkillCategory({ name: 'Markup & Style', slug: 'markup-style' }),
  defineSkillCategory({ name: 'Design', slug: 'design' }),
  defineSkillCategory({ name: 'Soft Skills', slug: 'soft' })
] as const;

const defineSkill = <S extends string>(
  skill: Omit<Skill<S>, 'category'> & {
      category?: StringWithAutoComplete<(typeof categories)[number]['slug']>;
  }
): Skill<S> => {
  const out: Skill<S> = omit(skill, 'category');
  if (skill.category) {
      out.category = categories.find((it) => it.slug === skill.category);
  }
  return out;
};

export const items = [
  defineSkill({
      slug: 'js',
      color: 'yellow',
      description:
          '',
      logo: Assets.JavaScript,
      name: 'Javascript',
      category: 'pro-lang'
  }),
  defineSkill({
      slug: 'css',
      color: 'blue',
      description:
          '',
      logo: Assets.CSS,
      name: 'CSS',
      category: 'markup-style'
  }),
  defineSkill({
      slug: 'html',
      color: 'orange',
      description:
          '',
      logo: Assets.HTML,
      name: 'HTML',
      category: 'markup-style'
  }),
  defineSkill({
      slug: 'nodejs',
      color: 'green',
      description:
          '',
      logo: Assets.NodeJs,
      name: 'NodeJs',
      category: 'library'
  }),
  defineSkill({
      slug: 'java',
      color: 'orange',
      description: '',
      logo: Assets.Java,
      name: 'Java',
      category: 'pro-lang'
  }),
  defineSkill({
      slug: 'mongodb',
      color: 'orange',
      description: '',
      logo: Assets.MongoDB,
      name: 'MongoDB',
      category: 'db'
  }),
  defineSkill({
      slug: 'python',
      color: 'Yellow',
      description: '',
      logo: Assets.Python,
      name: 'Python',
      category: 'pro-lang'
  }),
  defineSkill({
      slug: 'expressjs',
      color: 'orange',
      description: '',
      logo: Assets.ExpressJs,
      name: 'ExpressJs',
      category: 'library'
  }),
  defineSkill({
      slug: 'pandas',
      color: 'green',
      description: '',
      logo: Assets.Pandas,
      name: 'Pandas',
      category: 'library'
  }),
  defineSkill({
      slug: 'numpy',
      color: 'blue',
      description: '',
      logo: Assets.Numpy,
      name: 'Numpy',
      category: 'library'
  }),
  defineSkill({
    slug: 'ocaml',
    color: 'orange',
    description: '',
    logo: Assets.OCaml,
    name: 'OCaml',
    category: 'pro-lang'
  }),
  defineSkill({
    slug: 'swing',
    color: 'orange',
    description: '',
    logo: Assets.Swing,
    name: 'Swing',
    category: 'library'
  })
] as const;

export const title = 'Skills';

export const getSkills = (
  ...slugs: Array<StringWithAutoComplete<(typeof items)[number]['slug']>>
): Array<Skill> => items.filter((it) => slugs.includes(it.slug));

export const groupByCategory = (
  query: string
): Array<{ category: SkillCategory; items: Array<Skill> }> => {
  const out: ReturnType<typeof groupByCategory> = [];
  const others: Array<Skill> = [];

  items.forEach((item) => {
      if (query.trim() && !item.name.toLowerCase().includes(query.trim().toLowerCase())) return;
      // push to others if item does not have a category
      if (!item.category) {
          others.push(item);
          return;
      }
      // check if category exists
      let category = out.find((it) => it.category.slug === item.category?.slug);
      if (!category) {
          category = { items: [], category: item.category };
          out.push(category);
      }
      category.items.push(item);
  });

  if (others.length !== 0) {
      out.push({ category: { name: 'Others', slug: 'others' }, items: others });
  }

  return out;
};
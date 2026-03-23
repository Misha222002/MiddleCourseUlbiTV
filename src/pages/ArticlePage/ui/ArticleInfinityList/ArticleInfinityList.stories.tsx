// @ts-nocheck
/* eslint-disable */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ArticleInfinityList } from './ArticleInfinityList';

export default {
   title: 'shared/ArticleInfinityList',
   component: ArticleInfinityList,
   argTypes: {
      backgroundColor: { control: 'color' },
   },
} as ComponentMeta<typeof ArticleInfinityList>;

const Template: ComponentStory<typeof ArticleInfinityList> = (args) => <ArticleInfinityList {...args} />;

export const Normal = Template.bind({});
Normal.args = {};
import React from "react";
import Todo from './Todo'

export default {
    title: 'Mywork/Todo',
    component: Todo
}
/**My todo componenet */
const Template = (args) => <Todo {...args} />;

export const story_one = Template.bind({})
story_one.args = {
    borderWidth : 'medium',
    Padding : 'medium',
    TextColor : 'black',
    headerTextColor : 'white',
    BorderColor : '#747381',
    headerBorderColor : '#494866',
    BackgroundColor : '#a6a5b8',
    headerBackgroundColor : '#65647a',
}

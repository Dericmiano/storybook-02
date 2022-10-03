import React from "react";
import TodoDetailScreen from '../Screens/TodoDetailScreen'

export default {
    title: 'Mywork/TodoDetail',
    component: TodoDetailScreen
}
const Template = (args) => <TodoDetailScreen {...args} />;
export const story_Details = Template.bind({})
story_Details.args = {
    borderWidth : 'medium',
    Padding : 'medium',
    TextColor : 'black',
    headerTextColor : 'white',
    BorderColor : '#747381',
    headerBorderColor : '#494866',
    BackgroundColor : '#a6a5b8',
    headerBackgroundColor : '#65647a',
}


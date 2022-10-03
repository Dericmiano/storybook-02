import React from "react";
import Todoupdate from "../Screens/TodoUpdateScreen";

export default {
    title: 'Mywork/TodoUpdate',
    component: Todoupdate
}

const Template = (args) => <Todoupdate {...args}/>
export const story_one = Template.bind({})
story_one.args={
    borderWidth : 'medium',
    Padding : 'medium',
    TextColor : 'black',
    headerTextColor : 'white',
    BorderColor : '#747381',
    headerBorderColor : '#494866',
    BackgroundColor : '#a6a5b8',
    headerBackgroundColor : '#65647a',
}
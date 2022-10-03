import React from "react";
import Todo2 from "./Todo2";
export default {
    title :'Mywork/Todo2',
    component:Todo2,
}

const Template = (args) => <Todo2 {...args} />;

export const story_one = Template.bind({})
story_one.args = {
    borderWidth : 'box-border',
    Padding : 'p-2',
    borderRadius : "0.5rem",
    Border : "border-4",
    Margin : "m-1",
    TextColor : 'text-black',
    height : 'h-30',
    width : 'w-50',
    rounded : 'rounded-lg',
    BorderColor : '#747381',
    // headerBorderColor = '#494866',
    BackgroundColor : 'bg-blue-400',
    headerBackgroundColor : 'bg-blue-400',
    completed : true

}

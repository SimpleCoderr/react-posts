import { useState } from "react";
import MyInput from "../UI/input/MyInput";
import MySelect from "../UI/select/MySelect";

const PostsFilter = ({ filter, setFilter }) => {



    return (
        <div className="posts__filter">
            <MyInput
                placeholder={'search post'}
                type="text"
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
            />
            <MySelect
                onChange={selectedSort => {
                    setFilter({ ...filter, sort: selectedSort })
                }}
                value={filter.sort}
                options={[
                    { value: 'title', name: 'by title' },
                    { value: 'body', name: 'by description' },
                ]}
                defaultValue={'sort'}
            />
        </div>
    )
}

export default PostsFilter;
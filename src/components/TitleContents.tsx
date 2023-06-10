import styled from "styled-components";
import {Outlet, useLocation, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";

const WrapperTitleContents = styled.section`
  background-color: white;
  display: flex;
  flex-direction: column;
  width: 70%;
  margin: 12px auto;
`

const SectionName = styled.div`
  font-family: cursive;
  padding: 14px 20px;
  color: #333;
  font-size: 1.24375rem;
  font-weight: 700;
  line-height: 1.75rem;
  text-decoration: none;
  text-transform: capitalize;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ListCategories = styled.div`
  display: flex;
  width: 100%;
  border-bottom: 1px solid #dedede;
  margin-bottom: 12px;
`

const CategoryItem = styled.div<{active: string}>`
  user-select: none;
  margin-left: 24px;
  font-family: Fira Sans, sans-serif;
  display: flex;
  font-size: .875rem;
  font-weight: 500;
  letter-spacing: .05rem;
  line-height: 1rem;
  padding: 0 4px;
  text-decoration: none;
  align-items: center;
  height: 44px;
  background-color: transparent;
  cursor: pointer;
  text-transform: uppercase;
  color: ${props => props.active === 'true' ? '#77a8d0' : 'black'};
  &:hover {
    color: #7b99a9;
  }
  border-bottom: ${props => props.active === 'true' ? '2px solid #77a8d0' : 'none'};
`

const TitleContents = () => {
    const [activeCategory, setActiveCategory] = useState(0);
    const categories = [
        'posts',
        'authors'
    ]
    const navigate = useNavigate()
    const {pathname} = useLocation();
    const path = pathname.split('/')[1]
    useEffect(() => {
        switch (activeCategory) {
            case 1:
                navigate(`../${path}/authors`)
                break;
            default:
                navigate(`../${path}/posts`)
                break;
        }
    }, [activeCategory])
    return (
        <>
            <WrapperTitleContents>
                <SectionName>{categories[activeCategory]}</SectionName>
                <ListCategories>
                    {categories.map((category,i) => (
                        <CategoryItem key={i} active={i===activeCategory ? 'true' : 'false'} onClick={()=>setActiveCategory(i)}>
                            {category}
                        </CategoryItem>
                    ))}
                </ListCategories>
            </WrapperTitleContents>
            <Outlet />
        </>
    )
}

export default TitleContents;
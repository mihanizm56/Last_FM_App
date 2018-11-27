import React, {Component} from 'react'
import posed, { PoseGroup } from 'react-pose'
import PropTypes from 'prop-types'
import {fadeInit, routerInit, hoverInit, focusInit, dragInit, pressInit, groupInit} from './configs'
import {Route} from 'react-router-dom'

const withPageAnimation = (Component, config) => {
	const Page = posed.div({
  		enter: { staggerChildren: 30 }
	});
	return props => {
		return(
			<Page>
				<Component {...props} />
			</Page>
		)
	}
}

const withEnterExitAnimation = (Component, config = groupInit) => {
	const Wrapper = posed.div(config)
	return props => {
		const is = typeof props.is == 'undefined' ? true : props.is
		return(
			<PoseGroup>
				{is && 
					<Wrapper key='single-component-animation'>
						<Component {...props} />
					</Wrapper>
				}
			</PoseGroup>
		)
	}
}

const withEventAnimation = (Component, config) => {
	const Wrapper = posed.div(config)
	return props => {
		return(
			<Wrapper>
				<Component {...props} />
			</Wrapper>
		)
	}
}

const withRouteAnimation = (Component, config = routerInit) => {
	const RouteContainer = posed.div(config)
	return ({location, ...props}) => {
		return(
			<Route render={({location})=> {
				return (
					<div>
						<PoseGroup>
							<RouteContainer key={location.key}>
								<Component {...props} />
							</RouteContainer>
						</PoseGroup>
					</div>
				)
			 }}/>
		)
	}
}


const withGroupAnimation = (ItemComponent, config = groupInit) => {
	const Item = posed.li(config)
	return ({childrensProps, ...props}) => {
	return(
		<ul {...props} >
			<PoseGroup>
				{childrensProps.map((el) => <Item key={el.key}> <ItemComponent {...el} /> </Item>)}
			</PoseGroup>
		</ul>
	)
}
}

const compose = (...funcs) => x => [...funcs].reduceRight((a,f) => f(a), x)
const curring = (f,...head) => (...tail) => f(...head, ...tail)

const withFocusAnimation = (comp) => withEventAnimation(comp, focusInit)
const withHoverAnimation = (comp) => withEventAnimation(comp, hoverInit)
const withPressAnimation = (comp) => withEventAnimation(comp, pressInit)
const Draggable = (comp) => withEventAnimation(comp, dragInit)


export {
	compose,
	Draggable,
	withHoverAnimation,
	withFocusAnimation, 
	withPressAnimation,
	withEnterExitAnimation, 
	withEventAnimation, 
	withGroupAnimation,
	withRouteAnimation,
	withPageAnimation
}








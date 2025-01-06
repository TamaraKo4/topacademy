import React, { Component } from "react";
import css from "./Destination.module.scss";
import Headermenu from "../../genericComponents/Headermenu/Headermenu";
import Hero from "../../genericComponents/Hero/Hero";
import { RichTextToHTML } from "../../../functions/storyBlokRichTextRenderer";
import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

export default class Destination extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<>
				<div {...storyblokEditable(this.props.blok)} className={css["wrapper"]}>
					<Headermenu blok={this.props.menu.content}></Headermenu>
					<main>
						<Hero blok={this.props.blok} contentTypeTag="course" />
						<div className={css["location-page__main-content"]}>
							<div id="location-page__short-description" key="location-page__short-description" className={css["location-page__short-description"]}>
								<section className={css["rich-text-section--with-navigator"]}>					
									<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: "Country: " + this.props.blok.country })}</div>
									<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: "From: " + this.props.blok.from.split(' ')[0] })}</div>
									<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: "To: " + this.props.blok.to.split(' ')[0] })}</div>
									<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: "Cost: " + this.props.blok.cost + " $" })}</div>
									<div className={css["rich-text-section__rich-text"]}>{RichTextToHTML({ document: this.props.blok.description })}</div>													
							</section>
						</div>
					</div>
					</main>
				</div>
			</>
		);
		
	}
}
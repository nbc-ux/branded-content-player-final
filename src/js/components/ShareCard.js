import React, { Component, PropTypes } from 'react';
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import {
  ShareButtons,
  ShareCounts,
  generateShareIcon
} from 'react-share';

export default class ShareDialog extends Component {

	onClickShare = (e) => {
		this.props.onClickShare();
	}

	static propTypes = {
		show: PropTypes.bool,
		onClose: PropTypes.func,
		allowEmbed: PropTypes.bool,
		sharePlatforms: PropTypes.array
	}

	constructor(props) {
		super(props);
	}

	checkInput = (event) => {
		//numbers only
		if (!(event.charCode >= 48 && event.charCode <= 57)) {
			event.preventDefault();
			event.stopPropagation();
			return 0;
		}
	}

	copyValue = (event) => {
		let elem = event.target;
		elem.select();
		document.execCommand('copy');
		return true;
	}

	render() {

		let { show, allowEmbed, sharePlatforms } = this.props;

		const {
  FacebookShareButton,
  GooglePlusShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  TelegramShareButton,
  WhatsappShareButton,
  PinterestShareButton,
  VKShareButton,
  OKShareButton,
  RedditShareButton,
  TumblrShareButton,
  LivejournalShareButton,
  EmailShareButton,
} = ShareButtons;

const {
  FacebookShareCount,
  GooglePlusShareCount,
  LinkedinShareCount,
  PinterestShareCount,
  VKShareCount,
  OKShareCount,
  RedditShareCount,
  TumblrShareCount,
} = ShareCounts;

const FacebookIcon = generateShareIcon('facebook');
const TwitterIcon = generateShareIcon('twitter');
const TelegramIcon = generateShareIcon('telegram');
const WhatsappIcon = generateShareIcon('whatsapp');
const GooglePlusIcon = generateShareIcon('google');
const LinkedinIcon = generateShareIcon('linkedin');
const PinterestIcon = generateShareIcon('pinterest');
const VKIcon = generateShareIcon('vk');
const OKIcon = generateShareIcon('ok');
const RedditIcon = generateShareIcon('reddit');
const TumblrIcon = generateShareIcon('tumblr');
const LivejournalIcon = generateShareIcon('livejournal');
const MailruIcon = generateShareIcon('mailru');
const EmailIcon = generateShareIcon('email');

const title = 'Scene 1: Elliot looks for a clue';
let shareUrl = "http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-1-lg.jpg";
let exampleImage = "http://brandedcontent.nbcuxlab.com/player-staging-2/assets/img/scene-1-lg.jpg";

		const content = show ? (
			<div className="share-card">
				<div className="share-card__close" onClick={ this.props.onClose } >
					<i className="iconcss icon-close"></i>
				</div>
				<div className="share-card__content">
					{
						sharePlatforms.length > 0 ?
							<div className="share-card__buttons">
								{
									sharePlatforms.map((platform) => {
										switch(platform) {
											case "facebook": {
												return (
													<button className="share-card__button facebook">
                                                          {/*<FacebookShareButton
                                                            url={shareUrl}
                                                            quote={title}
                                                            windowWidth={1000}
                                                            windowHeight={730}
                                                            className="Demo__some-network__share-button"> */}
                                                            <i className="iconcss icon-facebook"></i>
                                                           {/* </FacebookShareButton> */}
													</button>
												)
											}
											case "twitter": {
												return (
													<button className="share-card__button twitter">
													{/* <TwitterShareButton
                                                          url={shareUrl}
                                                          title={title}
                                                           windowWidth={1000}
                                                           windowHeight={730}
                                                          className="Demo__some-network__share-button">*/}
                                                          <i className="iconcss icon-twitter"></i>
                                                       {/*</TwitterShareButton>*/}
													</button>
												)
											}
												case "pinterest": {
												return (
													<button className="share-card__button mail">
													{/*<PinterestShareButton
                                                      url={String(window.location)}
                                                      media={`${String(window.location)}/${exampleImage}`}
                                                      windowWidth={1000}
                                                      windowHeight={730}
                                                      className="Demo__some-network__share-button">*/}
                                                      <PinterestIcon size={36}  />
                                                   {/* </PinterestShareButton>*/}
													</button>
												)
											}
											case "googleplus": {
												return (
													<button className="share-card__button google-plus">
													 {/*<GooglePlusShareButton
                                                            url={shareUrl}
                                                            windowWidth={1000}
                                                            windowHeight={730}
                                                           className="Demo__some-network__share-button">*/}
                                                           <i className="iconcss icon-google-plus"></i>
                                                        {/* </GooglePlusShareButton>*/}
													</button>
												)
											}
											default:
												return null								
										}
									})
								}
							</div>
						:
							null
					}
					<div className="share-card__text-line share-card__link">
						<span className="label">Link</span>
						<input className="input-fullwidth truncate" type="text" defaultValue="http://www.usanetwork.com/shooter/videos/danger-close" readOnly onClick={ this.copyValue }></input>
					</div>
					{
						allowEmbed ?
							<div className="share-card__embed">
								<div className="share-card__text-line share-card__embed">
									<span className="label">Embed</span>
									<input className="input-fullwidth truncate" type="text" defaultValue="http://www.usanetwork.com/shooter/videos/danger-close" readOnly onClick={ this.copyValue }></input>
								</div>
								<div className="share-card__text-line share-card__size">
									<span className="label">Size</span>
									<input className="input-sizewidth " type="text" defaultValue="480" maxLength="4" onKeyPress={ this.checkInput }></input>
									<span className="size-separator">x</span>
									<input className="input-sizewidth" type="text" defaultValue="270" maxLength="4" onKeyPress={ this.checkInput }></input>
									<span className="space"></span>
								</div>
							</div>
						: 
							null
					}

				</div>
			</div>
		) : null;
		return (
			<ReactCSSTransitionGroup transitionName="share-card" transitionEnterTimeout={500} transitionLeaveTimeout={500}>
				{content}
			</ReactCSSTransitionGroup>
		)
	}
}
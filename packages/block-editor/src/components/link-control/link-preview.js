/**
 * External dependencies
 */
import classnames from 'classnames';

/**
 * WordPress dependencies
 */
import { __, sprintf } from '@wordpress/i18n';
import { Button, ExternalLink } from '@wordpress/components';
import { filterURLForDisplay, safeDecodeURI } from '@wordpress/url';

/**
 * Internal dependencies
 */
import { ViewerSlot } from './viewer-slot';

export default function LinkPreview( { value, onEditClick } ) {
	const displayURL =
		( value && filterURLForDisplay( safeDecodeURI( value.url ) ) ) || '';

	return (
		<div
			aria-label={ __( 'Currently selected' ) }
			aria-selected="true"
			className={ classnames( 'block-editor-link-control__search-item', {
				'is-current': true,
			} ) }
		>
			<span className="block-editor-link-control__search-item-header">
				<ExternalLink
					className="block-editor-link-control__search-item-title"
					href={ value.url }
					aria-label={ sprintf(
						/* translators: %s: currently displayed URL's value. */
						__( 'Currently selected URL is %s ' ),
						displayURL
					) }
				>
					{ ( value && value.title ) || displayURL }
				</ExternalLink>
				{ value && value.title && (
					<span className="block-editor-link-control__search-item-info">
						{ displayURL }
					</span>
				) }
			</span>

			<Button
				isSecondary
				onClick={ () => onEditClick() }
				className="block-editor-link-control__search-item-action"
			>
				{ __( 'Edit' ) }
			</Button>
			<ViewerSlot fillProps={ value } />
		</div>
	);
}

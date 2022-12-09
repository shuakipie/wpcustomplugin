<?php
/**
 * Author: Hoang Ngo
 */

namespace WP_Defender\Module\Advanced_Tools\Model;

use Hammer\Helper\WP_Helper;
use WP_Defender\Module\Advanced_Tools\Component\Security_Headers\Sh_X_Frame;
use WP_Defender\Module\Advanced_Tools\Component\Security_Headers\Sh_XSS_Protection;
use WP_Defender\Module\Advanced_Tools\Component\Security_Headers\Sh_Content_Type_Options;
use WP_Defender\Module\Advanced_Tools\Component\Security_Headers\Sh_Strict_Transport;
use WP_Defender\Module\Advanced_Tools\Component\Security_Headers\Sh_Feature_Policy;
use WP_Defender\Module\Advanced_Tools\Component\Security_Headers\Sh_Referrer_Policy;

class Security_Headers_Settings extends \Hammer\WP\Settings {
	/**
	 * @var bool
	 */
	public $sh_xframe = false;
	/**
	 * @var string
	 */
	public $sh_xframe_mode = 'sameorigin';
	/**
	 * @var string
	 */
	public $sh_xframe_urls = '';
	/**
	 * @var bool
	 */
	public $sh_xss_protection = false;
	/**
	 * @var string
	 */
	public $sh_xss_protection_mode = 'sanitize';
	/**
	 * @var bool
	 */
	public $sh_content_type_options = false;
	/**
	 * @var string
	 */
	public $sh_content_type_options_mode = 'nosniff';
	/**
	 * @var bool
	 */
	public $sh_strict_transport = false;
	/**
	 * @var int
	 */
	public $hsts_preload = 0;
	/**
	 * @var int
	 */
	public $include_subdomain = 0;
	/**
	 * @var string
	 */
	public $hsts_cache_duration = '30 days';
	/**
	 * @var bool
	 */
	public $sh_referrer_policy = false;
	/**
	 * @var string
	 */
	public $sh_referrer_policy_mode = 'origin-when-cross-origin';
	/**
	 * @var bool
	 */
	public $sh_feature_policy = false;
	/**
	 * @var string
	 */
	public $sh_feature_policy_mode = 'self';
	/**
	 * @var string
	 */
	public $sh_feature_policy_urls = '';
	/**
	 * Contains all the data generated by rules
	 * @var array
	 */
	public $data = array();

	private static $_instance;

	public function __construct( $id, $is_multi ) {
		parent::__construct( $id, $is_multi );
	}

	/**
	 * @return Security_Headers_Settings
	 */
	public static function instance() {
		if ( is_null( self::$_instance ) ) {
			$class           = new Security_Headers_Settings( 'wd_security_headers_settings', WP_Helper::is_network_activate( wp_defender()->domain ) );
			self::$_instance = $class;
		}

		return self::$_instance;
	}

	/**
	 * Define labels for settings key, we will use it for HUB
	 *
	 * @param null $key
	 *
	 * @return string
	 */
	public function labels( $key = null ) {
		$labels = array(
			'sh_xframe'               => __( 'Enable X-Frame-Options', wp_defender()->domain ),
			'sh_xframe_urls'          => __( 'Allow-from', wp_defender()->domain ),
			'sh_xss_protection'       => __( 'Enable X-XSS-Protection', wp_defender()->domain ),
			'sh_content_type_options' => __( 'Enable X-Content-Type-Options', wp_defender()->domain ),
			'sh_strict_transport'     => __( 'Enable Strict Transport', wp_defender()->domain ),
			'hsts_preload'            => __( 'HSTS Preload', wp_defender()->domain ),
			'include_subdomain'       => __( 'Include Subdomains', wp_defender()->domain ),
			'hsts_cache_duration'     => __( 'Browser caching', wp_defender()->domain ),
			'sh_referrer_policy'      => __( 'Enable Referrer Policy', wp_defender()->domain ),
			'sh_referrer_policy_mode' => __( 'Referrer Information', wp_defender()->domain ),
			'sh_feature_policy'       => __( 'Enable Feature-Policy', wp_defender()->domain ),
			'sh_feature_policy_urls'  => __( 'Specific Origins', wp_defender()->domain ),
		);

		if ( null !== $key ) {
			return isset( $labels[ $key ] ) ? $labels[ $key ] : null;
		}
	}

	/**
	 * Get headers
	 *
	 * @return array
	 */
	public function getHeaders() {
		return array(
			Sh_X_Frame::$rule_slug              => new Sh_X_Frame(),
			Sh_XSS_Protection::$rule_slug       => new Sh_XSS_Protection(),
			Sh_Content_Type_Options::$rule_slug => new Sh_Content_Type_Options(),
			Sh_Strict_Transport::$rule_slug     => new Sh_Strict_Transport(),
			Sh_Referrer_Policy::$rule_slug      => new Sh_Referrer_Policy(),
			Sh_Feature_Policy::$rule_slug       => new Sh_Feature_Policy(),
		);
	}

	/**
	 * Filter the security headers and return data as array
	 *
	 * @param bool $sort
	 *
	 * @return array
	 */
	public function getHeadersAsArray( $sort = false ) {
		$headers = $this->getHeaders();
		$data    = array();
		foreach ( $headers as $header ) {
			$data[ $header::$rule_slug ] = array(
				'slug'  => $header::$rule_slug,
				'title' => $header->getTitle(),
				'misc'  => $header->getMiscData(),
			);
		}

		if ( $sort ) {
			ksort( $data );
		}

		return $data;
	}

	/**
	 * @param $key
	 *
	 * @return mixed
	 */
	public function getDataValues( $key ) {
		if ( is_array( $this->data ) && isset( $this->data[ $key ] ) ) {
			return $this->data[ $key ];
		}

		return null;
	}

	/**
	 * @param $key
	 * @param $value
	 */
	public function setDataValues( $key, $value ) {
		if ( null === $value ) {
			unset( $this->data[ $key ] );
		} elseif ( is_array( $this->data ) ) {
			$this->data[ $key ] = $value;
		}
		$this->save();
	}

	public function afterValidate() {
		if ( true === $this->sh_xframe
		     && ( empty( $this->sh_xframe_mode )
		          || ! in_array( $this->sh_xframe_mode, array( 'sameorigin', 'allow-from', 'deny' ), true ) )
		) {
			$this->addError( 'sh_xframe_mode', __( 'X-Frame-Options mode is invalid', wp_defender()->domain ) );

			return false;
		}

		if ( true === $this->sh_xss_protection
		     && ( empty( $this->sh_xss_protection_mode )
		          || ! in_array( $this->sh_xss_protection_mode, array( 'sanitize', 'block', 'none' ), true ) )
		) {
			$this->addError( 'sh_xss_protection_mode', __( 'X-XSS-Protection mode is invalid', wp_defender()->domain ) );

			return false;
		}

		if ( true === $this->sh_referrer_policy
		     && ( empty( $this->sh_referrer_policy_mode )
		          || ! in_array(
					$this->sh_referrer_policy_mode,
					array(
						'no-referrer',
						'no-referrer-when-downgrade',
						'origin',
						'origin-when-cross-origin',
						'same-origin',
						'strict-origin',
						'strict-origin-when-cross-origin',
						'unsafe-url',
					),
					true
				)
		     )
		) {
			$this->addError( 'sh_referrer_policy_mode', __( 'Referrer Policy mode is invalid', wp_defender()->domain ) );

			return false;
		}
	}

	/**
	 * Refresh headers
	 */
	public function refreshHeaders() {
		$defined_headers = $this->getHeaders();
		$enabled         = [];
		foreach ( $defined_headers as $header ) {
			$status = $header->check();
			if ( $status == true ) {
				$enabled[] = $header;
			}
		}
		wp_defender()->global['security_headers_enabled'] = $enabled;
	}
}
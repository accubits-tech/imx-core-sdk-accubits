/* tslint:disable */
/* eslint-disable */
/**
 * Immutable X API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1
 * Contact: support@immutable.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */



/**
 * 
 * @export
 * @interface Collection
 */
export interface Collection {
    /**
     * Ethereum address of the ERC721 contract
     * @type {string}
     * @memberof Collection
     */
    'address': string;
    /**
     * URL of the tile image for this collection
     * @type {string}
     * @memberof Collection
     */
    'collection_image_url': string | null;
    /**
     * Description of the collection
     * @type {string}
     * @memberof Collection
     */
    'description': string | null;
    /**
     * URL of the icon for this collection
     * @type {string}
     * @memberof Collection
     */
    'icon_url': string | null;
    /**
     * URL of the metadata for this collection
     * @type {string}
     * @memberof Collection
     */
    'metadata_api_url': string | null;
    /**
     * Name of the collection
     * @type {string}
     * @memberof Collection
     */
    'name': string;
    /**
     * The collection\'s project ID
     * @type {number}
     * @memberof Collection
     */
    'project_id': number;
}


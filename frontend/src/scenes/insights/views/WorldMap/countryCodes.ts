export const letterToRegionalIndicator = {
    A: '🇦',
    B: '🇧',
    C: '🇨',
    D: '🇩',
    E: '🇪',
    F: '🇫',
    G: '🇬',
    H: '🇭',
    I: '🇮',
    J: '🇯',
    K: '🇰',
    L: '🇱',
    M: '🇲',
    N: '🇳',
    O: '🇴',
    P: '🇵',
    Q: '🇶',
    R: '🇷',
    S: '🇸',
    T: '🇹',
    U: '🇺',
    V: '🇻',
    W: '🇼',
    X: '🇽',
    Y: '🇾',
    Z: '🇿',
}

/**
 * Returns country flag emoji for a given ISO 3166-1 alpha-2 country code.
 *
 * This is super simple because a country flag is in fact just the country's ISO code in _regional indicator_ form.
 * See: https://en.wikipedia.org/wiki/Regional_indicator_symbol
 */
export function countryCodeToFlag(countryCode: string): string {
    return `${letterToRegionalIndicator[countryCode[0]]}${letterToRegionalIndicator[countryCode[1]]}`
}

export const countryCodeToName = {
    AE: 'United Arab Emirates',
    AF: 'Afghanistan',
    AG: 'Antigua and Barbuda',
    AL: 'Albania',
    AM: 'Armenia',
    AO: 'Angola',
    AR: 'Argentina',
    AT: 'Austria',
    AU: 'Australia',
    AZ: 'Azerbaijan',
    BA: 'Bosnia and Herzegovina',
    BD: 'Bangladesh',
    BE: 'Belgium',
    BF: 'Burkina Faso',
    BG: 'Bulgaria',
    BI: 'Burundi',
    BJ: 'Benin',
    BN: 'Brunei',
    BO: 'Bolivia',
    BR: 'Brazil',
    BS: 'Bahamas',
    BT: 'Bhutan',
    BW: 'Botswana',
    BY: 'Belarus',
    BZ: 'Belize',
    CA: 'Canada',
    CD: 'Democratic Republic of the Congo',
    CF: 'Central African Republic',
    CG: 'Republic of the Congo',
    CH: 'Switzerland',
    CI: 'Ivory Coast',
    CL: 'Chile',
    CM: 'Cameroon',
    CN: 'China',
    CO: 'Colombia',
    CR: 'Costa Rica',
    CU: 'Cuba',
    CV: 'Cape Verde',
    CZ: 'Czech Republic',
    DE: 'Germany',
    DJ: 'Djibouti',
    DK: 'Denmark',
    DO: 'Dominican Republic',
    DZ: 'Algeria',
    EC: 'Ecuador',
    EE: 'Estonia',
    EG: 'Egypt',
    EH: 'Western Sahara',
    ER: 'Eritrea',
    ES: 'Spain',
    ET: 'Ethiopia',
    FI: 'Finland',
    FJ: 'Fiji',
    FK: 'Falkland Islands',
    FO: 'Faroe Islands',
    GA: 'Gabon',
    GB: 'United Kingdom',
    GF: 'French Guiana',
    GH: 'Ghana',
    GL: 'Greenland',
    GN: 'Guinea',
    GP: 'Guadeloupe',
    GQ: 'Equatorial Guinea',
    GR: 'Greece',
    GT: 'Guatemala',
    GW: 'Guinea-Bissau',
    GY: 'Guyana',
    HK: 'Hong Kong',
    HN: 'Honduras',
    HR: 'Croatia',
    HT: 'Haiti',
    HU: 'Hungary',
    ID: 'Indonesia',
    IE: 'Ireland',
    IN: 'India',
    IQ: 'Iraq',
    IR: 'Iran',
    IS: 'Iceland',
    IT: 'Italy',
    JO: 'Jordan',
    JP: 'Japan',
    KE: 'Kenya',
    KG: 'Kyrgyzstan',
    KH: 'Cambodia',
    KI: 'Kiribati',
    KM: 'Comoros',
    KN: 'Saint Kitts and Nevis',
    KP: 'North Korea',
    KR: 'South Korea',
    KW: 'Kuwait',
    KZ: 'Kazakhstan',
    LA: 'Laos',
    LK: 'Sri Lanka',
    LR: 'Liberia',
    LS: 'Lesotho',
    LT: 'Lithuania',
    LV: 'Latvia',
    LY: 'Libya',
    MA: 'Morocco',
    MG: 'Madagascar',
    MK: 'Macedonia',
    ML: 'Mali',
    MM: 'Myanmar',
    MN: 'Mongolia',
    MR: 'Mauritania',
    MW: 'Malawi',
    MX: 'Mexico',
    MY: 'Malaysia',
    MZ: 'Mozambique',
    NA: 'Namibia',
    NC: 'New Caledonia',
    NE: 'Niger',
    NG: 'Nigeria',
    NI: 'Nicaragua',
    NO: 'Norway',
    NP: 'Nepal',
    NZ: 'New Zealand',
    OM: 'Oman',
    PA: 'Panama',
    PE: 'Peru',
    PF: 'French Polynesia',
    PG: 'Papua New Guinea',
    PH: 'Philippines',
    PL: 'Poland',
    PS: 'Palestinian Territory',
    PT: 'Portugal',
    PY: 'Paraguay',
    RO: 'Romania',
    RU: 'Russia',
    RW: 'Rwanda',
    SA: 'Saudi Arabia',
    SB: 'Solomon Islands',
    SD: 'Sudan',
    SE: 'Sweden',
    SI: 'Slovenia',
    SK: 'Slovakia',
    SL: 'Sierra Leone',
    SN: 'Senegal',
    SR: 'Suriname',
    SS: 'South Sudan',
    ST: 'Sao Tome and Principe',
    SV: 'El Salvador',
    SY: 'Syria',
    TC: 'Turks and Caicos Islands',
    TD: 'Chad',
    TG: 'Togo',
    TH: 'Thailand',
    TJ: 'Tajikistan',
    TL: 'East Timor',
    TM: 'Turkmenistan',
    TN: 'Tunisia',
    TO: 'Tonga',
    TR: 'Turkey',
    TT: 'Trinidad and Tobago',
    TW: 'Taiwan',
    TZ: 'Tanzania',
    UG: 'Uganda',
    US: 'United States',
    UY: 'Uruguay',
    UZ: 'Uzbekistan',
    VE: 'Venezuela',
    VG: 'British Virgin Islands',
    VI: 'U.S. Virgin Islands',
    VN: 'Vietnam',
    VU: 'Vanuatu',
    WS: 'Samoa',
    YE: 'Yemen',
    ZA: 'South Africa',
    ZM: 'Zambia',
    ZW: 'Zimbabwe',
    GE: 'Georgia',
    PK: 'Pakistan',
    RS: 'Serbia',
    SO: 'Somalia',
    IL: 'Israel',
    MD: 'Moldova',
    TF: 'French Southern Territories',
    FR: 'France',
    NL: 'Netherlands',
    LB: 'Lebanon',
    ME: 'Montenegro',
    UA: 'Ukraine',
    SZ: 'Swaziland',
    GS: 'South Georgia and the South Sandwich Islands',
    GM: 'Gambia',
    QA: 'Qatar',
    JM: 'Jamaica',
    CY: 'Cyprus',
    PR: 'Puerto Rico',
    LU: 'Luxembourg',
    MU: 'Mauritius',
    CW: 'Curacao',
    SX: 'Sint Maarten',
    DM: 'Dominica',
    FM: 'Micronesia',
    BH: 'Bahrain',
    AD: 'Andorra',
    MP: 'Northern Mariana Islands',
    PW: 'Palau',
    SC: 'Seychelles',
    IO: 'British Indian Ocean Territory',
    BB: 'Barbados',
    VC: 'Saint Vincent and the Grenadines',
    LC: 'Saint Lucia',
    GD: 'Grenada',
    MT: 'Malta',
    MV: 'Maldives',
    KY: 'Cayman Islands',
    MS: 'Montserrat',
    BL: 'Saint Barthelemy',
    NU: 'Niue',
    PM: 'Saint Pierre and Miquelon',
    CK: 'Cook Islands',
    WF: 'Wallis and Futuna',
    AS: 'American Samoa',
    MH: 'Marshall Islands',
    AW: 'Aruba',
    LI: 'Liechtenstein',
    SH: 'Saint Helena',
    JE: 'Jersey',
    AI: 'Anguilla',
    MF: 'Saint Martin',
    GG: 'Guernsey',
    SM: 'San Marino',
    BM: 'Bermuda',
    TV: 'Tuvalu',
    NR: 'Nauru',
    GI: 'Gibraltar',
    PN: 'Pitcairn',
    MC: 'Monaco',
    VA: 'Vatican',
    IM: 'Isle of Man',
    GU: 'Guam',
    SG: 'Singapore',
    TK: 'Tokelau',
    XK: 'Kosovo',
    RE: 'Réunion',
    MO: 'Macao',
    MQ: 'Martinique',
    AX: 'Åland Islands',
    BQ: 'Caribbean Netherlands',
    AQ: 'Antarctica',
    BV: 'Bouvet Island',
    CC: 'Cocos (Keeling) Islands',
    CX: 'Christmas Island',
    HM: 'Heard Island and McDonald Islands',
    NF: 'Norfolk Island',
    SJ: 'Svalbard and Jan Mayen',
    UM: 'United States Minor Outlying Islands',
    YT: 'Mayotte',
}

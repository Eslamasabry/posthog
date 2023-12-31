export const listActionsAPIResponse = {
    results: [
        {
            id: 49103,
            name: 'Clicked notification row',
            description: '',
            post_to_slack: false,
            slack_message_format: '',
            steps: [
                {
                    id: '60889',
                    event: '$autocapture',
                    tag_name: null,
                    text: null,
                    text_matching: null,
                    href: null,
                    href_matching: null,
                    selector: '.notifications-menu .activity-log-row',
                    url: null,
                    name: null,
                    url_matching: 'contains',
                    properties: [],
                },
            ],
            created_at: '2023-08-22T06:31:40.495488Z',
            created_by: {
                id: 5042,
                uuid: '017bcbcf-2391-0000-1868-14fb987285c5',
                distinct_id: 'PqMBBFBfKo638PwvjCWTSZ6dnswYzJ3RtH8VIHCBWAy',
                first_name: 'Paul',
                email: 'paul@posthog.com',
                is_email_verified: true,
            },
            deleted: false,
            is_calculating: false,
            last_calculated_at: '2023-08-22T06:31:40.495197Z',
            team_id: 2,
            is_action: true,
            bytecode_error: null,
            tags: [],
        },
        {
            id: 49059,
            name: 'clicked nav bar2',
            description: '',
            post_to_slack: false,
            slack_message_format: '',
            steps: [
                {
                    id: '60829',
                    event: '$autocapture',
                    tag_name: null,
                    text: 'Products',
                    text_matching: null,
                    href: '/product-analytics',
                    href_matching: null,
                    selector: null,
                    url: null,
                    name: '',
                    url_matching: 'exact',
                    properties: [],
                },
                {
                    id: '60830',
                    event: '$autocapture',
                    tag_name: null,
                    text: null,
                    text_matching: null,
                    href: null,
                    href_matching: null,
                    selector: '.border-b .h-full:nth-child(2) > .text-\\[13\\.5px\\]',
                    url: null,
                    name: '',
                    url_matching: 'exact',
                    properties: [],
                },
            ],
            created_at: '2023-08-21T20:54:17.218311Z',
            created_by: {
                id: 6352,
                uuid: '017d5334-911a-0000-6954-2d394263f3ca',
                distinct_id: '48vHN2rW28SvzA6D4NdgHajLOjBP1ulsI0Rr5DNas4i',
                first_name: 'Cameron',
                email: 'cameron@posthog.com',
                is_email_verified: true,
            },
            deleted: false,
            is_calculating: false,
            last_calculated_at: '2023-08-21T20:54:17.218023Z',
            team_id: 2,
            is_action: true,
            bytecode_error: null,
            tags: [],
        },
        {
            id: 49050,
            name: 'Clicked Products in nav bar',
            description: '',
            post_to_slack: false,
            slack_message_format: '',
            steps: [
                {
                    id: '60819',
                    event: '$autocapture',
                    tag_name: null,
                    text: 'Products',
                    text_matching: null,
                    href: '/product-analytics',
                    href_matching: null,
                    selector: null,
                    url: null,
                    name: '',
                    url_matching: 'exact',
                    properties: [],
                },
                {
                    id: '60820',
                    event: '$autocapture',
                    tag_name: null,
                    text: 'Pricing',
                    text_matching: null,
                    href: '/pricing',
                    href_matching: null,
                    selector: null,
                    url: null,
                    name: null,
                    url_matching: 'contains',
                    properties: [],
                },
            ],
            created_at: '2023-08-21T18:46:13.210958Z',
            created_by: {
                id: 6352,
                uuid: '017d5334-911a-0000-6954-2d394263f3ca',
                distinct_id: '48vHN2rW28SvzA6D4NdgHajLOjBP1ulsI0Rr5DNas4i',
                first_name: 'Cameron',
                email: 'cameron@posthog.com',
                is_email_verified: true,
            },
            deleted: false,
            is_calculating: false,
            last_calculated_at: '2023-08-21T18:46:13.210590Z',
            team_id: 2,
            is_action: true,
            bytecode_error: null,
            tags: [],
        },
    ],
}

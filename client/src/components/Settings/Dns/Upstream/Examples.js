import React from 'react';
import PropTypes from 'prop-types';
import { Trans, withTranslation } from 'react-i18next';
import { COMMENT_LINE_DEFAULT_TOKEN } from '../../../../helpers/constants';

const Examples = (props) => (
    <div className="list leading-loose">
        <Trans>examples_title</Trans>:
        <ol className="leading-loose">
            <li>
                <code>94.140.14.140</code>: {props.t('example_upstream_regular')}
            </li>
            <li>
                <code>udp://unfiltered.adguard-dns.com</code>: <Trans>example_upstream_udp</Trans>
            </li>
            <li>
                <code>tcp://94.140.14.140</code>: <Trans>example_upstream_tcp</Trans>
            </li>
            <li>
                <code>tcp://unfiltered.adguard-dns.com</code>: <Trans>example_upstream_tcp_hostname</Trans>
            </li>
            <li>
                <code>tls://unfiltered.adguard-dns.com</code>:
                <span>
                    <Trans
                        components={[
                            <a
                                href="https://en.wikipedia.org/wiki/DNS_over_TLS"
                                target="_blank"
                                rel="noopener noreferrer"
                                key="0"
                            >
                                DNS-over-TLS
                            </a>,
                        ]}
                    >
                        example_upstream_dot
                    </Trans>
                </span>
            </li>
            <li>
                <code>https://unfiltered.adguard-dns.com/dns-query</code>:
                <span>
                    <Trans
                        components={[
                            <a
                                href="https://en.wikipedia.org/wiki/DNS_over_HTTPS"
                                target="_blank"
                                rel="noopener noreferrer"
                                key="0"
                            >
                                DNS-over-HTTPS
                            </a>,
                        ]}
                    >
                        example_upstream_doh
                    </Trans>
                </span>
            </li>
            <li>
                <code>quic://unfiltered.adguard-dns.com:784</code>:
                <span>
                    <Trans
                        components={[
                            <a
                                href="https://datatracker.ietf.org/doc/html/rfc9250"
                                target="_blank"
                                rel="noopener noreferrer"
                                key="0"
                            >
                                DNS-over-QUIC
                            </a>,
                        ]}
                    >
                        example_upstream_doq
                    </Trans>
                </span>
            </li>
            <li>
                <code>sdns://...</code>:
                <span>
                    <Trans
                        components={[
                            <a
                                href="https://dnscrypt.info/stamps/"
                                target="_blank"
                                rel="noopener noreferrer"
                                key="0"
                            >
                                DNS Stamps
                            </a>,
                            <a
                                href="https://dnscrypt.info/"
                                target="_blank"
                                rel="noopener noreferrer"
                                key="1"
                            >
                                DNSCrypt
                            </a>,
                            <a
                                href="https://en.wikipedia.org/wiki/DNS_over_HTTPS"
                                target="_blank"
                                rel="noopener noreferrer"
                                key="2"
                            >
                                DNS-over-HTTPS
                            </a>,
                        ]}
                    >
                        example_upstream_sdns
                    </Trans>
                </span>
            </li>
            <li>
                <code>[/example.local/]94.140.14.140</code>:
                <span>
                    <Trans
                        components={[
                            <a
                                href="https://github.com/AdguardTeam/AdGuardHome/wiki/Configuration#upstreams-for-domains"
                                target="_blank"
                                rel="noopener noreferrer"
                                key="0"
                            >
                                Link
                            </a>,
                        ]}
                    >
                        example_upstream_reserved
                    </Trans>
                </span>
            </li>
            <li>
                <code>{COMMENT_LINE_DEFAULT_TOKEN} comment</code>:
                <span>
                    <Trans>example_upstream_comment</Trans>
                </span>
            </li>
        </ol>
    </div>
);

Examples.propTypes = {
    t: PropTypes.func.isRequired,
};

export default withTranslation()(Examples);

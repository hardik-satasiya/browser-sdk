export default {
  issuer: 'https://id.dev.olt-dev.io/v1/id/auth/realms/olt',
  authorization_endpoint:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/protocol/openid-connect/auth',
  token_endpoint:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/protocol/openid-connect/token',
  token_introspection_endpoint:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/protocol/openid-connect/token/introspect',
  userinfo_endpoint:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/protocol/openid-connect/userinfo',
  end_session_endpoint:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/protocol/openid-connect/logout',
  jwks_uri:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/protocol/openid-connect/certs',
  check_session_iframe:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/protocol/openid-connect/login-status-iframe.html',
  grant_types_supported: [
    'authorization_code',
    'implicit',
    'refresh_token',
    'password',
    'client_credentials',
  ],
  response_types_supported: [
    'code',
    'none',
    'id_token',
    'token',
    'id_token token',
    'code id_token',
    'code token',
    'code id_token token',
  ],
  subject_types_supported: ['public', 'pairwise'],
  id_token_signing_alg_values_supported: ['RS256'],
  userinfo_signing_alg_values_supported: ['RS256'],
  request_object_signing_alg_values_supported: ['none', 'RS256'],
  response_modes_supported: ['query', 'fragment', 'form_post'],
  registration_endpoint:
    'https://id.dev.olt-dev.io/v1/id/auth/realms/olt/clients-registrations/openid-connect',
  token_endpoint_auth_methods_supported: [
    'private_key_jwt',
    'client_secret_basic',
    'client_secret_post',
    'client_secret_jwt',
  ],
  token_endpoint_auth_signing_alg_values_supported: ['RS256'],
  claims_supported: [
    'sub',
    'iss',
    'auth_time',
    'name',
    'given_name',
    'family_name',
    'preferred_username',
    'email',
  ],
  claim_types_supported: ['normal'],
  claims_parameter_supported: false,
  scopes_supported: [
    'openid',
    'offline_access',
    'profile',
    'email',
    'address',
    'phone',
    'olt-internal',
    'olt-external',
    'olt-applications',
  ],
  request_parameter_supported: true,
  request_uri_parameter_supported: true,
  code_challenge_methods_supported: ['plain', 'S256'],
  tls_client_certificate_bound_access_tokens: true,
};

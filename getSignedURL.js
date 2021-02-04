const S3 = require('aws-sdk/clients/s3');


exports.handler = async (event) => {
    const { body } = event;
    const { pictureName } = JSON.parse(body);
    
    const s3 = new S3({ signatureVersion: 'v4' });
    const signedURL = s3.getSignedUrl(
        'getObject',
        {
            Bucket: 'cursomicroservicios-dia2',
            Key: 'images/' + pictureName,
            Expires: 300,
        },
    );
    
    return {
        statusCode: 200,
        body: JSON.stringify({
            urlFirmada: signedURL,
        }),
    };
};

